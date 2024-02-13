import { ReactComponent as ArrowSVG } from "../../../media/arrow_icon.svg"
import PropTypes from "prop-types";
import classNames from "classnames";


ArrowIcon.propTypes = {
    leftToRight: PropTypes.bool,
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}


export function ArrowIcon(props) {

    let style = {};
    if(props.leftToRight) {
        style={
            transform:'rotate(180deg)'
        }
    }

    return (
        <span className={classNames(props.spanClass)}>
            <ArrowSVG className={classNames(props.svgClass)} style={{...style}}  />
        </span>
    );
}