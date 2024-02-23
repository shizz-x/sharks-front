import style from './SiteMessage.module.scss'
import {useEffect, useState} from "react";
import {TIME_OUT_MESSAGE} from "./SiteMessageContext";
import {useSwipeable} from "react-swipeable";

const config = {
    delta: 10,                             // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: true,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: false,                     // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
}
export function SiteMessage(props) {
    const [show,setShow] = useState(true);
    const [timer,setTimer] = useState(null);

    const handlers = useSwipeable({
        onSwipedUp: (eventData) =>setShow(false),
        ...config,
    });

    useEffect(()=>{
        const t = setTimeout(()=>{
            setShow(false);
            clearTimeout(timer);
        },TIME_OUT_MESSAGE);
        setTimer(t);
        return ()=>{
            if(timer!==null) {
                clearTimeout(timer);
                setTimer(null);
            }
        }
    },[]);


    return (
        <div className={style.siteMessage} style={show?null:{display:'none'}} {...handlers} >
            {props.children}
            <hr />
        </div>
    );

}