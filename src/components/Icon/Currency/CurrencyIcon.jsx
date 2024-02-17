import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as CurrencySVG } from "../../../media/currency_icon.svg"


CurrencyIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function CurrencyIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <CurrencySVG className={classNames(props.svgClass)} />
        </span>
    );
}