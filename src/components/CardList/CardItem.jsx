import style from "./CardList.module.scss"
import PropTypes from "prop-types";
import {SpanBadge} from "../SpanBadge/SpanBadge";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import {AcceptIcon} from "../Icon/AcceptIcon/AcceptIcon";
import {BorderRadius} from "../Icon/BorderRadius/BorderRadius";
import classNames from "classnames";

CardItem.propTypes={
    number:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    cardName:PropTypes.string.isRequired,
    cardLogo:PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
    select: PropTypes.bool,
    onClick:PropTypes.func
}

export function CardItem(props) {
    const onClickHandler = (obj) =>{
        if(props.onClick instanceof Function) {
            props.onClick(obj);
        }
    }
    return (
        <div className={classNames(style.cardItem,props.select?style.select:null)} onClick={()=>{onClickHandler({
            number:props.number,
            color:props.color,
            cardName:props.cardName,
            cardLogo:props.cardLogo,
            currency:props.currency
        })}}>
            <div className={style.logo} style={{backgroundColor:props.color}}><img src={props.cardLogo} alt={props.cardName} /></div>
            <div className={style.text}>
                <b>{props.cardName}</b>
                <span>{props.number}</span>
            </div>
            <div className={style.currency}>
                <SpanBadge>{props.currency}</SpanBadge>
            </div>
            <ShowDependencies dependencies={props.select}>
                <div className={style.currency}>
                    <div className={style.selectIcon}>
                        <BorderRadius left={4}><AcceptIcon /></BorderRadius>
                    </div>
                </div>
            </ShowDependencies>
        </div>
    )
}