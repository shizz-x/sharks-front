import react, {useContext, useEffect, useState} from "react";
import {SiteMessage} from "./SiteMessage";
import style from './SiteMessage.module.scss'

export const TIME_OUT_MESSAGE = 5000;

const SiteMsgContext = react.createContext({
   showMessage: (Component)=>{}
});


export function SiteMessageContext(props) {
    const [messageStack,setMessageStack] = useState([]);
    const [timer,setTimer] = useState(null);

    const clearTimer = ()=>{
        if(timer!== null) {
            clearTimeout(timer);
        }
    }

    useEffect(()=>{
        return clearTimer;
    },[])

    const showMessageHandler = (Component)=>{
        const t = setTimeout(()=>{
            setMessageStack([]);
            clearTimer();
            setTimer(null);
        },TIME_OUT_MESSAGE+2000);
        clearTimer();
        setTimer(t);
        const messages = [...messageStack];
        messages.push(Component);
        setMessageStack(messages);
    }

    return(
        <SiteMsgContext.Provider value={{
            showMessage:showMessageHandler
        }}>
            {props.children}
            <div className={style.messageStack}>
                {messageStack.map((Value,index)=>(
                    <SiteMessage key={index}><Value /></SiteMessage>
                ))}
            </div>
        </SiteMsgContext.Provider>
    );
}

export function useSiteMessage() {
    return useContext(SiteMsgContext);
}