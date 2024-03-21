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
import {clearPins, PinHOC} from "./PinHOC";


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



function SecurityPassword(props) {
    const {getCheckHandler,hidePasswordWindow,title,errorTitle} = useSecurityPassword();

    const handlers = useSwipeable({
        onSwipedDown: (eventData) =>{
            props.clearPins();
            hidePasswordWindow();
        },
        ...config,
    });


    const canClosePass = props.canClose;



    useEffect(()=>{
        const fullFill = props.pin.findIndex((val)=>val==='');
        if(fullFill===-1) {
            const checkHandler = getCheckHandler();
            const result = checkHandler(props.pin);
            if(result) {
                hidePasswordWindow();
                props.clearPins();
            } else {
                const timer = setTimeout(()=>{
                    props.clearPins();
                    clearTimeout(timer);
                },2000)
                props.setErrorCode(true);
            }
        }
    },[props.pin])

    let addSwipeHandler = {};
    if(canClosePass) {
        addSwipeHandler = {...handlers};
    }


    return (
        <ShowDependencies dependencies={props.show}>
            <div className={classNames(style.secPasswordContainer)}>
                <div className={style.contPassword}>
                    <div className={classNames(style.codeBlock,props.errorCode?style.errorCode:null)} {...addSwipeHandler}>
                        <ShowDependencies dependencies={!canClosePass}>
                            <h3 className={'text-center'}>{props.errorCode?errorTitle:title}</h3>
                        </ShowDependencies>
                        <ShowDependencies dependencies={canClosePass}>
                            <hr className={style.hrTop} />
                            <div className={classNames('mb-1',style.innerContainer)}>
                                <h3>{props.errorCode?errorTitle:title}</h3>
                                <div className={style.closeWindow} onClick={()=>{
                                  props.clearPins();
                                  hidePasswordWindow();
                                }}>
                                    <DeleteIcon />
                                </div>
                            </div>
                        </ShowDependencies>

                        <PinsBlock
                            pins={props.pin}
                        />
                        <KeyPad handleButton={props.handleButton}  handleDelete={props.handleDelete} />
                    </div>
                </div>
            </div>
        </ShowDependencies>
    );
}

export default PinHOC(SecurityPassword);