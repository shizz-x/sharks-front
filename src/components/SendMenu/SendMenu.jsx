import styles from "./SendMenu.module.scss"
import {MenuButton} from "../Button/MenuButton";
import {QRIcon} from "../Icon/QR/QRIcon";
import classNames from "classnames";
import {PasteIcon} from "../Icon/Paste/PasteIcon";
import {ArrowIcon} from "../Icon/Arrow/ArrowIcon";
import PropTypes from "prop-types";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";

SendMenu.propTypes={
    qrHandler:PropTypes.func,
    qrLink:PropTypes.string,
    pasteHandler:PropTypes.func,
    pasteLink:PropTypes.string,
    nextHandler:PropTypes.func,
    nextLink:PropTypes.string,
    showQRButton:PropTypes.bool
}

export function SendMenu({showQRButton=false,...props}) {

    return(
        <div className={styles.sendMenu}>
            <ShowDependencies dependencies={props.showQRButton}>
                <MenuButton
                    classItem={classNames(styles.item,styles.first)}
                    classBlock={styles.block}
                    classButton={classNames(styles.btn,styles.btnQR)}
                    link={props.qrLink}
                    onClick={props.qrHandler}
                >
                    <QRIcon />
                </MenuButton>
            </ShowDependencies>
            <MenuButton
                classItem={classNames(styles.item,styles.other)}
                classBlock={styles.block}
                classButton={classNames(styles.btn,styles.btnWithText)}
                link={props.pasteLink}
                onClick={props.pasteHandler}
            >
                <PasteIcon spanClass={styles.icon} /> Paste
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