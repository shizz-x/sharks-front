import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as EyeSVG } from "../../../media/eyes_icon.svg"


EyeIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function EyeIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <EyeSVG className={classNames(props.svgClass)} />
        </span>
    );
}