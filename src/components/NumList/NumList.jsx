import style from "./NumList.module.scss"
import PropTypes from "prop-types";
import {NumItem} from "./NumItem";
import {useState} from "react";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";

NumList.propTypes = {
    list: PropTypes.array.isRequired,
    hideLine: PropTypes.bool
}
export function NumList(props) {
    const [lastSize,setLastSize] = useState(0);

    const lastSizeHandler = (size)=>{
        setLastSize(size);
    }

    return(
        <div className={style.numList}>
            <ShowDependencies dependencies={!props.hideLine}>
                <div className={style.line} style={{bottom:lastSize}}></div>
            </ShowDependencies>
            {props.list.map((value,index)=>(
                <NumItem
                    num={(index+1)}
                    title={value.title}
                    text={value.text}
                    select={value.select}
                    key={index}
                    setLastSize={index===(props.list.length-1)?lastSizeHandler:()=>{}}
                />
            ))}
        </div>
    );
}