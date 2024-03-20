import Form from 'react-bootstrap/Form';
import style from "./Input.module.scss"
import PropTypes from "prop-types";
import classNames from "classnames";
import {SpanBadge} from "../../SpanBadge/SpanBadge";

Input.propTypes={
    label: PropTypes.string.isRequired,
    value:PropTypes.string,
    type: PropTypes.string,
    changeHandler: PropTypes.func,
    maxlength:PropTypes.number,
    error: PropTypes.bool
}
export function Input(props) {
    return (
        <Form.Group className={classNames(style.input,style.text)}>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                type={props.type?props.type:"text"}
                placeholder="" value={props.value}
                onChange={props.changeHandler}
                maxLength={props.maxlength}
                className={props.error?style.error:null}
            />
            {props.error?<SpanBadge classNames={style.spanError}>Invalid</SpanBadge>:<></>}
        </Form.Group>
    );
}