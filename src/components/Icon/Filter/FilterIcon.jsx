import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as FilterSVG } from "../../../media/fillter_icon.svg"


FilterIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function FilterIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <FilterSVG className={classNames(props.svgClass)} />
        </span>
    );
}