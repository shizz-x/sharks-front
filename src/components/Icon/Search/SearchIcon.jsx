import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as SearchSVG } from "../../../media/search.svg"


SearchIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function SearchIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <SearchSVG className={classNames(props.svgClass)} />
        </span>
    );
}