import PropTypes from "prop-types";
import styles from './ContactList.module.scss'

ContactItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    wallet: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export function ContactItem(props) {

    const clickHandler = (id)=>{
        if (typeof props.onClick === 'function') {
           props.onClick(id);
        }
    }

    return (
        <div className={styles.contactItem} onClick={()=>clickHandler(props.id)}>
            <div className={styles.image}>
                <img src={props.image} alt={props.name} />
            </div>
            <div className={styles.text}>
                <span>{props.name}</span>
                <p>{props.wallet}</p>
            </div>
        </div>
    );
}