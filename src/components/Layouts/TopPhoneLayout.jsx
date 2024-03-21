import style from "./TopPhoneLayout.module.scss"
import PropTypes from "prop-types";
import classNames from "classnames";

TopPhoneLayout.propTypes={
    background:PropTypes.bool,
    style: PropTypes.object,
    error: PropTypes.bool
}
export function TopPhoneLayout(props) {
    return (
        <div
            className={classNames(style.topPhoneLayout,props.background?style.background:null,props.error?style.error:null)}
            style={props.style}>
            {props.children}
        </div>
    );
}