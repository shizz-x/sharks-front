import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as SentSVG } from "../../../media/sent_icon.svg"


SentIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function SentIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <SentSVG className={classNames(props.svgClass)} />
        </span>
    );
}