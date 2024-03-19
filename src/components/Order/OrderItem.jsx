import PropTypes from "prop-types";
import style from "./OrderItem.module.scss";
import {SpanBadge} from "../SpanBadge/SpanBadge";
import {AmountText} from "../AmountText/AmountText";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import {CardNumber} from "../CardNumber/CardNumber";

OrderItem.propTypes={
    titleLeftComponent: PropTypes.element,
    titleRightComponent: PropTypes.element,
    cardImage: PropTypes.string,
    amount: PropTypes.number,
    currency:PropTypes.string,
    tags: PropTypes.array,
    cardNumber: PropTypes.string
}

export function OrderItem(props) {
    return (
        <div className={style.orderItem}>
            <div className={style.line}>
                <div>
                    {props.titleLeftComponent}
                </div>
                <div>
                    {props.titleRightComponent}
                </div>
            </div>
            <ShowDependencies dependencies={props.cardNumber && props.cardNumber!==''}>
                <div className={style.line}>
                    <CardNumber number={props.cardNumber} className={style.cardNum} />
                </div>
            </ShowDependencies>
            <div className={style.line}>
                <ShowDependencies dependencies={props.amount!==undefined}>
                    <div className={style.amount}>
                        <AmountText currency={props.currency?props.currency:''} amount={props.amount} simpleClass={true} />
                    </div>
                </ShowDependencies>
                <ShowDependencies dependencies={props.cardImage!==undefined}>
                    <div>
                        <img src={props.cardImage} alt={'card'} />
                    </div>
                </ShowDependencies>
                <div className={style.tags}>
                    {props.tags.map((tag,key)=><SpanBadge key={key}>{tag}</SpanBadge>)}
                </div>
            </div>
        </div>
    );
}