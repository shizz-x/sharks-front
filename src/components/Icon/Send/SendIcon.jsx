import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as SendSVG } from "../../../media/send_icon.svg"


SendIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function SendIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <SendSVG className={classNames(props.svgClass)} />
        </span>
    );
}