import classNames from "classnames";
import styles from "./MenuButton.module.scss";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

MenuButton.propTypes = {
    classItem: PropTypes.string,
    classBlock:PropTypes.string,
    classButton:PropTypes.string,
    buttonTitle:PropTypes.string,
    disabled: PropTypes.bool,
    onClick:PropTypes.func,
    link: PropTypes.string
}
export function MenuButton(props) {
    return(
        <div className={classNames(styles.item,props.classItem,props.disabled?styles.disabled:null)}>
            <div className={classNames(styles.block,'float-end',props.classBlock)} onClick={props.onClick}>
                <Link to={props.link}>
                    <span className={classNames(styles.btn,props.classButton)}>{props.children}</span>
                    {props.buttonTitle}
                </Link>
            </div>
        </div>
    );
}