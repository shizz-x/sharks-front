import style from "./SecurityPassword.module.scss"
import classNames from "classnames";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import PropTypes from "prop-types";
import {BackspaceIcon} from "../Icon/Backspace/BackspaceIcon";
import {useEffect, useState} from "react";
import {PinsBlock} from "./PinsBlock";
import {useSecurityPassword} from "./SecurityPasswordContext";
import {KeyPad} from "../KeyPad/KeyPad";


SecurityPassword.propTypes = {
    show: PropTypes.bool.isRequired,
    canClose: PropTypes.bool.isRequired
}



export const PIN_SIZE = 6;

const clearPins = ()=>Array(PIN_SIZE).fill('')



export function SecurityPassword(props) {
    const [pin, setPin] = useState(clearPins());
    const [currentItem,setCurrentItem] = useState(0);
    const {getCheckHandler,hidePasswordWindow,title,errorTitle} = useSecurityPassword();
    const [errorCode,setErrorCode] = useState(false);


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


    return (
        <ShowDependencies dependencies={props.show}>
            <div className={classNames(style.secPasswordContainer)}>
                <div className={style.contPassword}>
                    <div className={classNames(style.codeBlock,errorCode?style.errorCode:null)}>
                        <h3>{errorCode?errorTitle:title}</h3>
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