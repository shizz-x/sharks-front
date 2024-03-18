import styles from "./NextPastMenu.module.scss";
import {MenuButton} from "../Button/MenuButton";
import classNames from "classnames";
import {ArrowIcon} from "../Icon/Arrow/ArrowIcon";
import PropTypes from "prop-types";
import {ArrowDownIcon} from "../Icon/ArrowDown/ArrowDownIcon";

DropDownMenu.propTypes={
    dropHandler:PropTypes.func,
    dropLink:PropTypes.string,
    dropTitle:PropTypes.string.isRequired,
    nextHandler:PropTypes.func,
    nextLink:PropTypes.string,
    nextLinkDisabled: PropTypes.bool,
}

export function DropDownMenu(props)  {
    return(
        <div className={styles.sendMenu}>
            <MenuButton
                classItem={classNames(styles.item,styles.other)}
                classBlock={styles.block}
                classButton={classNames(styles.btn,styles.btnWithText)}
                link={props.dropLink}
                onClick={props.dropHandler}
            >
                {props.dropTitle}<ArrowDownIcon spanClass={styles.arrowDown} />

            </MenuButton>
            <MenuButton
                classItem={classNames(styles.item,styles.other)}
                classBlock={styles.block}
                classButton={classNames(styles.btn,styles.btnWithText)}
                link={props.nextLink}
                onClick={props.nextHandler}
                disabled={props.nextLinkDisabled}
            >
                <ArrowIcon spanClass={styles.icon}  leftToRight={true} /> Next
            </MenuButton>
        </div>
    );
}