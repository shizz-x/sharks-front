import styles from "./SendMenu.module.scss"
import {MenuButton} from "../Button/MenuButton";
import {QRIcon} from "../Icon/QR/QRIcon";
import classNames from "classnames";
import {PasteIcon} from "../Icon/Paste/PasteIcon";
import {ArrowIcon} from "../Icon/Arrow/ArrowIcon";



export function SendMenu(props) {

    return(
        <div className={styles.sendMenu}>
            <MenuButton  classItem={styles.item}  classButton={classNames(styles.btn,styles.btnQR)}>
                <QRIcon />
            </MenuButton>
            <MenuButton  classItem={styles.item}  classButton={classNames(styles.btn,styles.btnWithText)}>
                <PasteIcon spanClass={styles.icon} /> Paste
            </MenuButton>
            <MenuButton  classItem={styles.item}  classButton={classNames(styles.btn,styles.btnWithText)}>
                <ArrowIcon spanClass={styles.icon}  leftToRight={true} /> Next
            </MenuButton>
        </div>
    )
}