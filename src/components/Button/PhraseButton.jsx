import style from "./PhraseButton.module.scss"
import PropTypes from "prop-types";
import classNames from "classnames";

PhraseButton.propTypes = {
    onClick: PropTypes.func,
    disable:PropTypes.bool
}
export function PhraseButton(props) {
    return(
        <button
            className={classNames(style.button,props.disable?style.disable:null)}
            onClick={props.disable?()=>{}:props.onClick}
        >
            {props.children}
        </button>
    );
}