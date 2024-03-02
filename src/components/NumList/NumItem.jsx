import style from "./NumList.module.scss";
import PropTypes from "prop-types";
import {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";

NumItem.propTypes = {
    num: PropTypes.number.isRequired,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    select: PropTypes.bool.isRequired,
    setLastSize: PropTypes.func.isRequired
}

export function NumItem(props){
    const ref = useRef();
    const [height, setHeight] = useState(0)
    useEffect(() => {
        setHeight(ref.current.clientHeight);
        props.setLastSize(ref.current.clientHeight);
    })


    return(
        <div className={classNames(style.item,props.select?style.select:null)} style={{minHeight:height}}>
            <span className={style.circle}>{props.num}</span>
            <div className={classNames(style.textBlock)} ref={ref}>
                <ShowDependencies dependencies={props.title?props.title.length>0:false}>
                    <p className={classNames(style.title,'mb-1')}>{props.title}</p>
                </ShowDependencies>
                <p className={'mt-0'}>{props.text}</p>
            </div>
        </div>

    );
}