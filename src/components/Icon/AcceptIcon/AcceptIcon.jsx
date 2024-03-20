import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as OkSVG } from "../../../media/ok_icon.svg"


AcceptIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function AcceptIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <OkSVG className={classNames(props.svgClass)} />
        </span>
    );
}