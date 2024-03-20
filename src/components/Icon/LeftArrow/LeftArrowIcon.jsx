import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as FilterSVG } from "../../../media/leftArrow.svg"


LeftArrowIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function LeftArrowIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <FilterSVG className={classNames(props.svgClass)} />
        </span>
    );
}