import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as CopySVG } from "../../../media/copy_icon.svg"


CopyIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function CopyIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <CopySVG className={classNames(props.svgClass)} />
        </span>
    );
}