import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as PasteSVG } from "../../../media/paste_icon.svg"


PasteIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function PasteIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <PasteSVG className={classNames(props.svgClass)} />
        </span>
    );
}