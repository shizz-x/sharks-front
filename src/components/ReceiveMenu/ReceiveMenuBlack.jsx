import style from "../ConfirmMenu/ConfirmMenu.module.scss";
import {ReceiveMenu} from "./ReceiveMenu";
import {Container} from "react-bootstrap";
import PropTypes from "prop-types";

ReceiveMenuBlack.propTypes = {
    shareLink: PropTypes.string,
    shareHandler:PropTypes.func,
    copyLink: PropTypes.string,
    copyHandler:PropTypes.func,
}
export function ReceiveMenuBlack(props) {
    return(
        <div className={style.confirmMenu}>
            <Container>
                <ReceiveMenu
                    shareLink={props.shareLink}
                    shareHandler={props.shareHandler}
                    copyLink={props.copyLink}
                    copyHandler={props.copyHandler}
                />
            </Container>
        </div>
    );
}