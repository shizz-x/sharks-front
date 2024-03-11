import Form from 'react-bootstrap/Form';
import PropTypes from "prop-types";
import style from "../Input/Input.module.scss";
import {useState} from "react";

ColorRadio.propTypes={
    label: PropTypes.string.isRequired,
    colors: PropTypes.array.isRequired,
    checkedColor:PropTypes.string,
    checkHandler:PropTypes.func

}

export function ColorRadio(props) {
    const [checked,setChecked] = useState(props.checkedColor?props.checkedColor:'');

    const colorSwitch = (color)=>{
        if(props.checkHandler instanceof Function) {
            props.checkHandler(color);
        }
        setChecked(color)
    }

    return(
        <div className={style.input}>
            <Form.Label>{props.label}</Form.Label>
            <div  className={style.colors}>
            {props.colors.map((color,key) => (
                <div className={style.myRadio} key={`inline-color-${key}`} style={checked===color?{backgroundColor:color}:{}}>
                    <Form.Check
                        inline
                        className={style.radio}
                        style={{borderColor:color}}
                        checked={checked===color}
                        name="color"
                        type={'radio'}
                        onClick={()=>colorSwitch(color)}
                        id={`inline-radio-${key}`}
                        value={color}
                    />
                </div>
            ))}
            </div>
        </div>
    );
}