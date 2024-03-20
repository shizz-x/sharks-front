import {Button as Btn}  from "react-bootstrap";
import styles from "./Button.module.scss"
import classNames from "classnames";
import PropTypes from 'prop-types'

Button.propTypes = {
    withoutBorder: PropTypes.bool,
    onClick: PropTypes.func,
    className: PropTypes.string
}

export function Button(props) {
    return (
        <Btn className={classNames(styles.button, props.withoutBorder?styles.withoutBorder:null,props.className)} onClick={props.onClick} variant="dark">
            {props.children}
        </Btn>
    );
}