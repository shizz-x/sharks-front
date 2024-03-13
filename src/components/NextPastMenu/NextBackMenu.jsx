import styles from "./NextPastMenu.module.scss"
import {MenuButton} from "../Button/MenuButton";
import classNames from "classnames";
import {ArrowIcon} from "../Icon/Arrow/ArrowIcon";
import PropTypes from "prop-types";

NextBackMenu.propTypes={
    backHandler:PropTypes.func,
    backLink:PropTypes.string,
    nextHandler:PropTypes.func,
    nextLink:PropTypes.string,
}

export function NextBackMenu(props) {

    return(
        <div className={styles.sendMenu}>
            <MenuButton
                classItem={classNames(styles.item,styles.other)}
                classBlock={styles.block}
                classButton={classNames(styles.btn,styles.btnWithText)}
                link={props.backLink}
                onClick={props.backHandler}
            >
                <ArrowIcon spanClass={styles.icon}  leftToRight={false} /> Back
            </MenuButton>
            <MenuButton
                classItem={classNames(styles.item,styles.other)}
                classBlock={styles.block}
                classButton={classNames(styles.btn,styles.btnWithText)}
                link={props.nextLink}
                onClick={props.nextHandler}
            >
                <ArrowIcon spanClass={styles.icon}  leftToRight={true} /> Next
            </MenuButton>
        </div>
    )
}