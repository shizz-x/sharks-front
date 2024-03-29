import PropTypes from "prop-types";
import style from "./SecurityPassword.module.scss";
import {useEffect, useState} from "react";
import {PIN_SIZE} from "./SecurityPassword";

PinsBlock.propTypes = {
    pins: PropTypes.array.isRequired
}

export function PinsBlock(props) {
    const [pin,setPin] = useState(props.pins);
    const [maskTimer, setMaskTimer] = useState(null);
    const [finishTime,setFinishTimer] = useState(true);

    const finishTimer = ()=>{
        if(maskTimer!==null) {
            clearTimeout(maskTimer);
            setMaskTimer(null);
        }
    }

    useEffect(() => {
        const newPins = [...props.pins];
        setPin(newPins.map((val,key)=>{
            if(val==='') return val;
            if(pin[key] ==='*') {
                return pin[key]
            }
            return val;
        }));

        finishTimer();
        const time = setTimeout(()=>{
            const newPins = [...props.pins];
            setPin(newPins.map((val)=>val!==''?'*':''));
            setFinishTimer(true);
        },1000);
        setMaskTimer(time);

    }, [props.pins]);

    useEffect(()=>{
        if(maskTimer!==null && !finishTime) {
            finishTimer();
            setFinishTimer(true);
        }

        return finishTimer;

    },[finishTime])

    return (
        <div className={style.pinsBlock}>
            {pin.map((item,key)=>(
                <span className={style.pin} key={key}>{item}</span>
            ))}
        </div>
    );
}