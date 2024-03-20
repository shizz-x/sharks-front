import { ReactComponent as BackspaceSVG } from "../../../media/backspace_icon.svg"
import PropTypes from "prop-types";
import classNames from "classnames";


BackspaceIcon.propTypes = {
    leftToRight: PropTypes.bool,
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}


export function BackspaceIcon(props) {

    let style = {};
    if(props.leftToRight) {
        style={
            transform:'rotate(180deg)'
        }
    }

    return (
        <span className={classNames(props.spanClass)}>
            <BackspaceSVG className={classNames(props.svgClass)} style={{...style}}  />
        </span>
    );
}