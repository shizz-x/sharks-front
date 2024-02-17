import PropTypes from "prop-types";
import style from "./Balance.module.scss"
import classNames from "classnames";
import {useCallback, useEffect, useState} from "react";


Balance.propTypes = {
    balance: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencySymbol:PropTypes.string.isRequired,
    hideWithScroll: PropTypes.bool
}

export function Balance(props){
    const [scroll, setScroll] = useState(0);
    const [hide,setHide] = useState(false);
    const onScroll = useCallback(() => setScroll(Math.round(window.scrollY)), []);

    const integerPart = Math.trunc(props.balance);
    const fractionalPart = Math.floor((props.balance - integerPart) * 100);
    const integerPartFormat = new Intl.NumberFormat("en").format(integerPart);


    useEffect(() => {
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [onScroll]);
    useEffect(()=>{
        if(scroll>50) {
            setHide(true);
        }
        if(scroll<1) {
            setHide(false);
        }
    },[scroll])


    return(
        <div className={classNames(style.balance,hide?style.hide:null)}>
            <div>
                <p className={style.integer}>{props.currencySymbol}{integerPartFormat}
                    <span className={style.fractional}>{fractionalPart!==0?'.'+fractionalPart:''}</span>
                </p>
                <p className={classNames('text-center')}>{props.currency}</p>
            </div>
        </div>
    );
}