import PropTypes from "prop-types";
import React, {useEffect, useState} from "react";
import {Container} from "react-bootstrap";
import style from "./CardNumber.module.scss"
import classNames from "classnames";
import {SpanBadge} from "../SpanBadge/SpanBadge";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";


CardNumber.propTypes = {
    number: PropTypes.string.isRequired,
    editable: PropTypes.bool,
    currentSelect: PropTypes.number,
    className: PropTypes.string
}

function separateCardNumber(cardNumber){
    const cleanNumber = cardNumber.replace(/\s+/g,'');
    return cleanNumber.padEnd(16,'0').match(/.{1,4}/g) || [];
}

export function CardNumber(props) {
    const [numList,setNumList] = useState(separateCardNumber(props.number));
    useEffect(()=>{
        setNumList(separateCardNumber(props.number));
    },[props.number])

    return(
        <div className={classNames(style.cardBlock,props.className)}>
            <div className={classNames(style.cardNumber,props.editable?style.editable:null)}>
                {numList.map((val,key)=>(
                    <div key={key}>
                        {Array.from(val).map((n,k)=>(
                            <span
                                className={classNames(
                                    (key*4+k)===props.currentSelect?style.current:null,
                                    (key*4+k)<props.currentSelect?style.add:null,
                                    (key*4+k)===(props.currentSelect-1)?style.last:null
                                )}
                                key={'num_'+key+'_'+k}
                            >
                                {n}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
            <ShowDependencies dependencies={props.children}>
                <div className={style.cardContent}>
                    {props.children}
                </div>
            </ShowDependencies>
        </div>
    );
}