import {CardIcon} from "../Icon/Card/CardIcon";
import {CashIcon} from "../Icon/Cash/CashIcon";
import {RecieveIcon} from "../Icon/Recieve/RecieveIcon";
import {SendIcon} from "../Icon/Send/SendIcon";
import styles from "./WalletMenu.module.scss"
import {MenuButton} from "../Button/MenuButton";


export function WalletMenu(props) {

    return(
        <div className={styles.walletMenu}>
            <MenuButton buttonTitle={'Card'} link={'/card'} classItem={styles.item}  classButton={styles.btn}>
                <CardIcon />
            </MenuButton>

            <MenuButton buttonTitle={'Cash'} classItem={styles.item}  classButton={styles.btn}>
                <CashIcon />
            </MenuButton>

            <MenuButton buttonTitle={'Receive'} link={'/receive'} classItem={styles.item}  classButton={styles.btn}>
                <RecieveIcon />
            </MenuButton>

            <MenuButton buttonTitle={'Send'} link={'/send'} classItem={styles.item}  classButton={styles.btn}>
                <SendIcon />
            </MenuButton>
        </div>
    )
}