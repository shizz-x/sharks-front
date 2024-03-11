import style from "./CardList.module.scss"
import PropTypes from "prop-types";
import {CardItem} from "./CardItem";
import classNames from "classnames";
import {useState} from "react";

CardList.propTypes={
    cards: PropTypes.array.isRequired,
    minVH:PropTypes.bool,
    onClick:PropTypes.func,
    selectable: PropTypes.bool

}
export function CardList(props) {

    const [select,setSelect] = useState(-1);
    const onClickHandler = (obj)=>{
        if(props.onClick instanceof  Function) {
            props.onClick(obj);
        }
        if(props.selectable) {
            const index = props.cards.findIndex((val)=>val.cardName===obj.cardName);
            setSelect(index);
        }
    }

    return (
        <div className={classNames(style.cardList,props.minVH?style.minVH:null)}>
            {props.cards.map((item,key)=>(
                <CardItem key={key}
                          cardLogo={item.cardLogo}
                          cardName={item.cardName}
                          color={item.color}
                          number={item.number}
                          currency={item.currency}
                          onClick={onClickHandler}
                          select={key === select}
                />
            ))}
        </div>
    );
}