import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as PlusSVG } from "../../../media/plus_icon.svg"


PlusIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function PlusIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <PlusSVG className={classNames(props.svgClass)} />
        </span>
    );
}
