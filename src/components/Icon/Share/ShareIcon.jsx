import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as ShareSVG } from "../../../media/share_icon.svg"


ShareIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function ShareIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <ShareSVG className={classNames(props.svgClass)} />
        </span>
    );
}