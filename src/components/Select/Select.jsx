import {SpanBadge} from "../SpanBadge/SpanBadge";
import {ArrowDownIcon} from "../Icon/ArrowDown/ArrowDownIcon";
import PropTypes from "prop-types";
import style from "./Select.module.scss";
import classNames from "classnames";

Select.propTypes = {
    title: PropTypes.string.isRequired,
    onClick:PropTypes.func
}
export function Select(props) {

    return(
        <SpanBadge  classNames={classNames(style.selectBox)} onClick={props.onClick}>
            {props.title} <ArrowDownIcon spanClass={style.arrow} />
        </SpanBadge>
    );
}