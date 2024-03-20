import style from "./SecurityPassword.module.scss"
import classNames from "classnames";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {PinsBlock} from "./PinsBlock";
import {useSecurityPassword} from "./SecurityPasswordContext";
import {KeyPad} from "../KeyPad/KeyPad";
import {DeleteIcon} from "../Icon/Delete/DeleteIcon";
import {useSwipeable} from "react-swipeable";


SecurityPassword.propTypes = {
    show: PropTypes.bool.isRequired,
    canClose: PropTypes.bool.isRequired
}

const config = {
    delta: 20,                             // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: true,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: false,                     // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
}


export const PIN_SIZE = 6;

const clearPins = ()=>Array(PIN_SIZE).fill('')



export function SecurityPassword(props) {

    const [pin, setPin] = useState(clearPins());
    const [currentItem,setCurrentItem] = useState(0);
    const {getCheckHandler,hidePasswordWindow,title,errorTitle} = useSecurityPassword();
    const [errorCode,setErrorCode] = useState(false);

    const handlers = useSwipeable({
        onSwipedDown: (eventData) =>{
            clearPin();
            hidePasswordWindow();
        },
        ...config,
    });


    const canClosePass = props.canClose;

    const clearPin = ()=>{
        setPin(clearPins())
        setCurrentItem(0);
        setErrorCode(false);
    }




    const handleButton = (val) =>{
        if(currentItem<PIN_SIZE) {
            const newItem = currentItem + 1;
            const newPin = [...pin];
            newPin[currentItem] = val;
            setPin(newPin);
            setCurrentItem(newItem);
        }
    }

    const handleDelete = ()=> {
        if(currentItem>=0) {
            const newPin = [...pin];
            const newItem = currentItem - 1;
            for(let i = newItem;i<PIN_SIZE;i++) {
                newPin[i] = '';
            }
            setPin(newPin);
            setCurrentItem(newItem<0?0:newItem)
        }
    }

    useEffect(()=>{
        const fullFill = pin.findIndex((val)=>val==='');
        if(fullFill===-1) {
            const checkHandler = getCheckHandler();
            const result = checkHandler(pin);
            if(result) {
                hidePasswordWindow();
                clearPin();
            } else {
                const timer = setTimeout(()=>{
                    clearPin();
                    clearTimeout(timer);
                },2000)
                setErrorCode(true);
            }
        }
    },[pin])

    let addSwipeHandler = {};
    if(canClosePass) {
        addSwipeHandler = {...handlers};
    }


    return (
        <ShowDependencies dependencies={props.show}>
            <div className={classNames(style.secPasswordContainer)}>
                <div className={style.contPassword}>
                    <div className={classNames(style.codeBlock,errorCode?style.errorCode:null)} {...addSwipeHandler}>
                        <ShowDependencies dependencies={!canClosePass}>
                            <h3 className={'text-center'}>{errorCode?errorTitle:title}</h3>
                        </ShowDependencies>
                        <ShowDependencies dependencies={canClosePass}>
                            <hr className={style.hrTop} />
                            <div className={classNames('mb-1',style.innerContainer)}>
                                <h3>{errorCode?errorTitle:title}</h3>
                                <div className={style.closeWindow} onClick={()=>{
                                  clearPin();
                                  hidePasswordWindow();
                                }}>
                                    <DeleteIcon />
                                </div>
                            </div>
                        </ShowDependencies>

                        <PinsBlock
                            pins={pin}
                        />
                        <KeyPad handleButton={handleButton}  handleDelete={handleDelete} />
                    </div>
                </div>
            </div>
        </ShowDependencies>
    );
}