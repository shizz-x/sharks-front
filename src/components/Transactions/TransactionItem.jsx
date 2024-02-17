import PropTypes from "prop-types";
import style from "./TransactionList.module.scss"
import {SentIcon} from "../Icon/Sent/SentIcon";
import classNames from "classnames";
import {DrawIcon} from "../Icon/Draw/DrawIcon";
import {CurrencyIcon} from "../Icon/Currency/CurrencyIcon";
import {RecvIcon} from "../Icon/Recv/RecvIcon";

TransactionItem.propTypes={
    operationType: PropTypes.number,
    operationDate: PropTypes.string,
    operationStatus: PropTypes.string,
    operationTitle:PropTypes.string,
    operationBalance: PropTypes.object
}

const OperationType ={
    draw:1,
    currency:2,
    receive:3,
    sent:4
}


const OperationIcon = (props)=>{
    let Icon = null;
    switch (props.operation) {
        case OperationType.draw:
            Icon = DrawIcon;
            break;
        case OperationType.currency:
            Icon = CurrencyIcon;
            break;
        case OperationType.sent:
            Icon=SentIcon;
            break;
        case OperationType.receive:
            Icon=RecvIcon;
            break;
        default:
            break;
    }
    if(Icon === null) return (<></>);
    return (<Icon />)
}

const OperationStatus = (props) => {
    const failed = props.status === 'Failed';
    let text = '';
    if(props.status!=='Completed'){
        text += props.status;
        text+=" ";
    }
    if(props.date!==null) {
        text += props.date;
    }
    return(
        <p className={classNames(style.status,failed?style.failed:null)}>
            {text}
        </p>
    );


}

export function TransactionItem(props){
    return (
        <div className={style.item}>
            <div className={style.icon}>
                <OperationIcon operation={props.operationType}/>
            </div>
            <div className={style.info}>
                <b>{props.operationTitle}</b>
                <OperationStatus status={props.operationStatus} date={props.operationDate} />
                <div className={style.balance}>
                    {props.operationBalance.balance} {props.operationBalance.currency}
                </div>
            </div>
        </div>
    );
}