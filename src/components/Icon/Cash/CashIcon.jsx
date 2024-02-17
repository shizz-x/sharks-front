import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as CashSVG } from "../../../media/cash_cion.svg"


CashIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function CashIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <CashSVG className={classNames(props.svgClass)} />
        </span>
    );
}