import PropTypes from "prop-types";
import style from "./ConfirmMenu.module.scss"
import {MenuButton} from "../Button/MenuButton";
import classNames from "classnames";
import {ArrowIcon} from "../Icon/Arrow/ArrowIcon";
import {AcceptIcon} from "../Icon/AcceptIcon/AcceptIcon";
import {Container} from "react-bootstrap";

ConfirmMenu.propTypes={
    backHandler:PropTypes.func,
    backLink:PropTypes.string,
    confirmHandler:PropTypes.func,
    confirmLink:PropTypes.string,
}
export function ConfirmMenu(props) {
    return(
        <div className={style.confirmMenu}>
            <Container>
                <div className={style.menuBlock}>
                    <MenuButton
                        classItem={classNames(style.item,style.other)}
                        classBlock={style.block}
                        classButton={classNames(style.btn,style.btnWithText)}
                        link={props.backLink}
                        onClick={props.backHandler}
                    >
                        <ArrowIcon spanClass={style.icon} /> Back
                    </MenuButton>
                    <MenuButton
                        classItem={classNames(style.item,style.other)}
                        classBlock={style.block}
                        classButton={classNames(style.btn,style.btnWithText)}
                        link={props.confirmLink}
                        onClick={props.confirmHandler}
                    >
                        <AcceptIcon spanClass={style.icon} /> Confirm
                    </MenuButton>
                </div>
            </Container>
        </div>
    );
}