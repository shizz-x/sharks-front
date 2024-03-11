import {MenuButton} from "../Button/MenuButton";
import classNames from "classnames";
import styles from "../NextPastMenu/NextPastMenu.module.scss";
import {ShareIcon} from "../Icon/Share/ShareIcon";
import {CopyIcon} from "../Icon/Copy/CopyIcon";
import PropTypes from "prop-types";


ReceiveMenu.propTypes = {
    shareLink: PropTypes.string,
    shareHandler:PropTypes.func,
    copyLink: PropTypes.string,
    copyHandler:PropTypes.func,
}
export function ReceiveMenu(props) {
    return(
        <div className={styles.sendMenu}>
            <MenuButton
                classItem={classNames(styles.item,styles.other)}
                classBlock={styles.block}
                classButton={classNames(styles.btn,styles.btnWithText)}
                link={props.shareLink}
                onClick={props.shareHandler}
            >
                <ShareIcon spanClass={styles.icon} /> Share
            </MenuButton>
            <MenuButton
                classItem={classNames(styles.item,styles.other)}
                classBlock={styles.block}
                classButton={classNames(styles.btn,styles.btnWithText)}
                link={props.copyLink}
                onClick={props.copyHandler}
            >
                <CopyIcon spanClass={styles.icon}  leftToRight={true} /> Copy
            </MenuButton>
        </div>
    );
}