import style from "./PhraseButton.module.scss"
import PropTypes from "prop-types";

PhraseButton.propTypes = {
    onClick: PropTypes.func
}
export function PhraseButton(props) {
    return(
        <button className={style.button} onClick={props.onClick}>
            {props.children}
        </button>
    );
}