import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as CardSVG } from "../../../media/card_icon.svg"


CardIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function CardIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <CardSVG className={classNames(props.svgClass)} />
        </span>
    );
}