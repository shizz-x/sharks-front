import PropTypes from "prop-types";
import {Container} from "react-bootstrap";
import classNames from "classnames";
import style from "./AmountText.module.scss"

AmountText.propTypes = {
    currency: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
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

    return(
        <Container className={classNames('text-center')}>
            <div className={style.amount}>
                <span className={style.currency}>{props.currency}</span>
                <span className={style.int}>{amount.int}</span>
                <span className={style.part}>{amount.part}</span>
            </div>
        </Container>
    );
}