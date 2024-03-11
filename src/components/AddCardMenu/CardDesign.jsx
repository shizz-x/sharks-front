import {CardNumber} from "../CardNumber/CardNumber";
import PropTypes from "prop-types";
import style from "./CardDesign.module.scss";
import {Col, Row} from "react-bootstrap";

CardDesign.propTypes={
    number:PropTypes.string.isRequired,
    color:PropTypes.string.isRequired,
    cardName:PropTypes.string.isRequired,
    cardLogo:PropTypes.string.isRequired,
}
export function CardDesign(props){
    return(
        <div className={style.cardDesign} style={{backgroundColor:props.color}}>
            <Row>
                <Col xs={6} className={style.cardTitle}>{props.cardName}</Col>
                <Col xs={6} className={'text-end'}><img src={props.cardLogo} alt={props.cardName} /></Col>
            </Row>
            <div className={style.cardSpace}></div>
            <CardNumber number={props.number} />
        </div>
    );
}