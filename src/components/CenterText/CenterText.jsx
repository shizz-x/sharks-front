import PropTypes from "prop-types";
import style from "./CenterText.module.scss"

CenterText.propTypes={
    title:PropTypes.string.isRequired
}
export function CenterText(props) {
    return(
        <div className={style.centerText}>
            <h3>
                {props.title}
            </h3>
            <div>
                {props.children}
            </div>
        </div>
    );
}