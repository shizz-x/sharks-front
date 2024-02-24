import PropTypes from "prop-types";
import style from "./ContactString.module.scss"

ContactString.propTypes = {
    image: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}
export function ContactString(props) {
    return(
        <span className={style.contactString}>
            <i style={{backgroundImage:'url("'+props.image+'")'}}></i>
            {props.name}
        </span>
    );
}