import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as DeleteSVG } from "../../../media/delete_icon.svg"


DeleteIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function DeleteIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <DeleteSVG className={classNames(props.svgClass)} />
        </span>
    );
}