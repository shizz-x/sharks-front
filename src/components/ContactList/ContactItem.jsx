import PropTypes from "prop-types";
import styles from './ContactList.module.scss'
import {AcceptIcon} from "../Icon/AcceptIcon/AcceptIcon";
import classNames from "classnames";

ContactItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    wallet: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    isSelect: PropTypes.bool.isRequired,
    onClick: PropTypes.func
}

export function ContactItem(props) {

    const clickHandler = (id)=>{
        if (typeof props.onClick === 'function') {
           props.onClick(id);
        }
    }

    return (
        <div className={classNames(styles.contactItem,props.isSelect?styles.select:null)} onClick={()=>clickHandler(props.id)}>
            <div className={styles.image}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={styles.text}>
                <span>{props.name}</span>
                <p>{props.wallet}</p>
            </div>
            <div className={styles.icon}>
                <div className={styles.border}>
                    <AcceptIcon />
                </div>
            </div>
        </div>
    );
}