import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as RecvSVG } from "../../../media/recv_icon.svg"


RecvIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function RecvIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <RecvSVG className={classNames(props.svgClass)} />
        </span>
    );
}