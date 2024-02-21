import style from "./ContactList.module.scss";
import {FilterForList} from "../FilterForList/FilterForList";
import PropTypes from "prop-types";
import {ContactItem} from "./ContactItem";

ContactList.propTypes = {
    contactList: PropTypes.array.isRequired,
    choiceHandler: PropTypes.func
}

export function ContactList(props) {

    return (
        <div className={style.contactList}>
            <FilterForList title={'Choose address'} />
            <div className={style.list}>
                {props.contactList.map((value)=>(
                    <ContactItem
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        wallet={value.wallet}
                        image={value.image}
                        onClick={props.choiceHandler}
                    />
                ))}
            </div>
        </div>
    );
}
