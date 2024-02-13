import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as DrawSVG } from "../../../media/draw_icon.svg"


DrawIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function DrawIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <DrawSVG className={classNames(props.svgClass)} />
        </span>
    );
}