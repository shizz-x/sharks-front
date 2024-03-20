import {FilterIcon} from "../Icon/Filter/FilterIcon";
import style from "./TransactionList.module.scss"
import PropTypes from "prop-types";
import {TransactionItem} from "./TransactionItem";
import {FilterForList} from "../FilterForList/FilterForList";

TransactionsList.propTypes ={
    transactions: PropTypes.array.isRequired
}

export function TransactionsList(props) {
    return (
        <div className={style.transactionList}>
            <FilterForList title={'Transactions'} />
            <div className={style.list}>
                {props.transactions.map((value, index)=>(
                    <TransactionItem
                        key={index}
                        operationBalance={value.operationBalance}
                        operationDate={value.operationDate}
                        operationStatus={value.operationStatus}
                        operationTitle={value.operationTitle}
                        operationType={value.operationType}
                    />
                ))}
            </div>
        </div>
    );
}