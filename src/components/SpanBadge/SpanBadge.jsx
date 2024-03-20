import styles from './SpanBadge.module.scss'
import classNames from "classnames";
import PropTypes from "prop-types";

SpanBadge.propTypes={
    classNames: PropTypes.string,
    onClick: PropTypes.func
}

export function SpanBadge(props) {
    return(
        <span className={classNames(styles.spanBadge)} onClick={props.onClick}>
            {props.children}
        </span>
    );
}