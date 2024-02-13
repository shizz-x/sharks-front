import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as ResVG } from "../../../media/recieve_icon.svg"


RecieveIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function RecieveIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <ResVG className={classNames(props.svgClass)} />
        </span>
    );
}