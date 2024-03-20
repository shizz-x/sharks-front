import PropTypes from "prop-types";
import react, {useContext, useState} from "react";
import {SecurityPassword} from "./SecurityPassword";
import style from "./SecurityPassword.module.scss"


SecurityPasswordContext.propTypes = {
    show:PropTypes.bool,
    title: PropTypes.string,
    errorTitle: PropTypes.string,
    getCheckHandler: PropTypes.func,
    showPasswordWindow:PropTypes.func,
    hidePasswordWindow: PropTypes.func,
    setCheckHandler:PropTypes.func
}


const SecPasswordContext = react.createContext({
    show:false,
    title: '',
    errorTitle: '',
    getCheckHandler: ()=>{},
    showPasswordWindow: (baseTitle,errorTitle,canClose= false)=>{},
    hidePasswordWindow: ()=>{},
    setCheckHandler:(func)=>{},
})

let checkHandler=(pin)=>{};

export function SecurityPasswordContext(props) {
    const [show,setShow] = useState(false);
    const [canClose,setCanClose] = useState(false);
    const [errorTitle,setErrorTitle] = useState('');
    const [baseTitle,setBaseTitle] = useState('');




    const setPinCodeHandler = (f) =>{
        if (typeof f === 'function') {
            checkHandler = f;
        }
    }
    const showPasswordWindow = (baseTitle,errorTitle,canClose= false)=>{
        setBaseTitle(baseTitle);
        setErrorTitle(errorTitle);
        setCanClose(canClose);
        setShow(true);
    }

    const hidePasswordWindow = ()=>{
        setShow(false);
    }

    return (
        <SecPasswordContext.Provider value={{
            show: show,
            title: baseTitle,
            errorTitle: errorTitle,
            getCheckHandler:()=>checkHandler,
            showPasswordWindow:showPasswordWindow,
            hidePasswordWindow: hidePasswordWindow,
            setCheckHandler:setPinCodeHandler
        }}>
            <div className={show?style.overFlow:null}>
                <div className={show?style.blur:null}>
                    {props.children}
                </div>
            </div>
            <SecurityPassword show={show} canClose={canClose} />
        </SecPasswordContext.Provider>
    );
}


export function useSecurityPassword() {
    return useContext(SecPasswordContext);
}