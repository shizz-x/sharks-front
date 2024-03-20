import style from "./StatusCompleted.module.scss"
import {AcceptIcon} from "../Icon/AcceptIcon/AcceptIcon";
import PropTypes from "prop-types";


StatusCompleted.propTypes = {
    title:PropTypes.string.isRequired
}
export function StatusCompleted(props) {
    return(
        <div className={style.statusCompleted}>
            <div className={style.statusBG}>
                {props.title} <AcceptIcon spanClass={style.icon} />
            </div>
        </div>
    );
}