import style from "./ContactList.module.scss";
import {FilterForList} from "../FilterForList/FilterForList";
import PropTypes from "prop-types";
import {ContactItem} from "./ContactItem";
import {Container} from "react-bootstrap";

ContactList.propTypes = {
    contactList: PropTypes.array.isRequired,
    choiceHandler: PropTypes.func,
    idSelect: PropTypes.number
}

export function ContactList(props) {

    return (
        <div className={style.contactList}>
            <Container>
                <FilterForList title={'Choose address'} />
            </Container>
            <div className={style.list}>
                {props.contactList.map((value)=>(
                    <ContactItem
                        key={value.id}
                        id={value.id}
                        name={value.name}
                        wallet={value.wallet}
                        image={value.image}
                        isSelect={value.id === props.idSelect}
                        onClick={props.choiceHandler}
                    />
                ))}
            </div>
        </div>
    );
}
