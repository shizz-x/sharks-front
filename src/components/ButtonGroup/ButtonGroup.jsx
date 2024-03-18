import {useState} from "react";
import style from "./ButtonGroup.module.scss";
import PropTypes from "prop-types";

/**
 * Так как вырезать фон нормально нельзя, есть путь через svg но он очень геморойный, поэтому передаем просто цвет
 * не на 100% тот эффект, но svg будет через маски и его толком переиспользовать нельзя
 */
ButtonGroup.propTypes={
    color: PropTypes.string.isRequired,
    radios: PropTypes.array.isRequired,
    onChoise:PropTypes.func
}

export function ButtonGroup(props) {
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');


    return (
        <div className={style.buttonGroup}>

            {props.radios.map((val,key)=>(
               <span className={val.value===radioValue?style.active:null} key={key} onClick={()=>{
                   setRadioValue(val.value);
                   if(props.onChoise instanceof  Function) {
                        props.onChoise(val);
                   }
               }}>
                   {val.value===radioValue?
                       <b style={{color:props.color}}>{val.name}</b>
                       :
                       val.name
                   }
               </span>
            ))}
        </div>
    );
}