import style from "./AdressString.module.scss"
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";

AdressString.propTypes = {
    address: PropTypes.string.isRequired
}


function shortenString(str, maxLen) {
    if (str.length <= maxLen) return str;

    let start = Math.floor((maxLen - 3) / 2);
    let end = Math.ceil((maxLen - 3) / 2);

    return str.substring(0, start) + '...' + str.substring(str.length - end);
}


export function AdressString(props) {
    const ref = useRef(null);
    const spanRef = useRef(null);
    const [num,setNum] = useState(20);


    // useEffect(()=>{
    //     if(ref!==null) {
    //         const width = ref.current.getBoundingClientRect().width;
    //         const numberStr = Math.floor(width/15);
    //         setNum(numberStr%2===0?numberStr:numberStr-1);
    //     }
    // },[])

    useEffect(()=>{
        if(ref!==null && spanRef!==null){
            const width = ref.current.getBoundingClientRect().width;
            const spanWidth = spanRef.current.getBoundingClientRect().width;
            if( (width-spanWidth) > 30) {
                const newNum = num+2;
                setNum(newNum);
            } else {
                if((width-spanWidth)< 10) {
                    const newNum = num-1;
                    setNum(newNum);
                }
            }
        }
    },[num])

    return (
        <div ref={ref}  className={style.adressString}>
            <span ref={spanRef}>
            {shortenString(props.address,num)}
            </span>
        </div>
    );
}