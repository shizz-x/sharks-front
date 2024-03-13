import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import classNames from "classnames";
import style from "./AmountText.module.scss"
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";

AmountText.propTypes = {
    currency: PropTypes.string,
    amount: PropTypes.number.isRequired,
    simpleClass:PropTypes.bool
}

function formatNumber(amount) {
    const parts = amount.toString().split('.');
    const integerPart = parts[0];
    let fractionalPart = parts[1];

    // Проверка на наличие дробной части и добавление "00", если дробная часть отсутствует
    if (!fractionalPart) {
        fractionalPart = '00';
    } else if (fractionalPart.length === 1) {
        // Добавление нуля, если дробная часть состоит из одной цифры
        fractionalPart += '0';
    }

    // Форматирование целой части числа
    const formattedIntegerPart = new Intl.NumberFormat('ru-RU').format(integerPart);

    // Формирование окончательного представления дробной части
    const formattedFractionalPart = '.' + fractionalPart;

    return {
        int:formattedIntegerPart,
        part: formattedFractionalPart
    }
}
export function AmountText(props) {

    const amount = formatNumber(props.amount);
    const Cont = props.simpleClass?
        (p)=><>{p.children}</>
        :
        (p)=> <Container className={classNames('text-center')}>{p.children}</Container>
    return(
        <Cont>
            <div className={props.simpleClass?style.simpleAmount:style.amount}>
                <ShowDependencies dependencies={props.currency}>
                    <span className={style.currency}>{props.currency}</span>
                </ShowDependencies>
                <span className={style.int}>{amount.int}</span>
                <span className={style.part}>{amount.part}</span>
            </div>
        </Cont>
    );
}