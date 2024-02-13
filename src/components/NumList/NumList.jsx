import style from "./NumList.module.scss"
import PropTypes from "prop-types";
import {NumItem} from "./NumItem";
import {useState} from "react";

NumList.propTypes = {
    list: PropTypes.array.isRequired
}
export function NumList(props) {
    const [lastSize,setLastSize] = useState(0);

    const lastSizeHandler = (size)=>{
        setLastSize(size);
    }

    return(
        <div className={style.numList}>
            <div className={style.line} style={{bottom:lastSize}}></div>
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