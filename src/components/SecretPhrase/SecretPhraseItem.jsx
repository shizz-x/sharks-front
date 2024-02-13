import PropTypes from "prop-types";
import style from "./SecretPhrase.module.scss"
import classNames from "classnames";

SecretPhraseItem.propTypes = {
    text: PropTypes.string.isRequired,
    position:PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
    showNumber:PropTypes.bool.isRequired,
}

function replaceCharWithSpace(text) {
    let result = '';
    for(let i= 0; i < text.length; i++ ) {
        result += '*';
    }
    return result;
}

export function SecretPhraseItem(props) {
    const num = props.showNumber?(props.position+1).toString()+' . ':'';
    let text = num + props.text;
    if(!props.show) {
        text = replaceCharWithSpace(text);
    }




    return(
        <span className={classNames(style.item,!props.show?style.hideText:null)}>{text}</span>
    );
}