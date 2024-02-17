import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as SettingSVG } from "../../../media/setting_icon.svg"


SettingIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function SettingIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <SettingSVG className={classNames(props.svgClass)} />
        </span>
    );
}