import {CardIcon} from "../Icon/Card/CardIcon";
import {CashIcon} from "../Icon/Cash/CashIcon";
import {RecieveIcon} from "../Icon/Recieve/RecieveIcon";
import {SendIcon} from "../Icon/Send/SendIcon";
import {Col, Row} from "react-bootstrap";
import styles from "./WalletMenu.module.scss"
import classNames from "classnames";


export function WalletMenu(props) {
    return(
        <div className={styles.walletMenu}>
            <div className={classNames(styles.item)}>
                <div className={styles.block}>
                    <span className={styles.btn}><CardIcon /></span>
                    Card
                </div>
            </div>
            <div className={classNames(styles.item)}>
                <div className={classNames(styles.block,'align-self-center')}>
                    <span className={styles.btn}><CashIcon /></span>
                    Cash
                </div>
            </div>
            <div className={classNames(styles.item)}>
                <div className={classNames(styles.block,'align-self-center')}>
                    <span className={styles.btn}><RecieveIcon /></span>
                    Receive
                </div>
            </div>
            <div className={classNames(styles.item)}>
                <div className={classNames(styles.block,'float-end')}>
                    <span className={styles.btn}><SendIcon /></span>
                    Send
                </div>
            </div>
        </div>
    )
}