import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as QRSVG } from "../../../media/qr_icon.svg"


QRIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function QRIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <QRSVG className={classNames(props.svgClass)} />
        </span>
    );
}