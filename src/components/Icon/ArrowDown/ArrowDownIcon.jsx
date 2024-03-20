import { ReactComponent as ArrowSVG } from "../../../media/arrow_down.svg"
import PropTypes from "prop-types";
import classNames from "classnames";


ArrowDownIcon.propTypes = {
    topToBottom: PropTypes.bool,
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}


export function ArrowDownIcon(props) {

    let style = {};
    if(props.topToBottom) {
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