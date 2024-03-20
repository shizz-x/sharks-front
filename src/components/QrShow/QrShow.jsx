import style from "./QrShow.module.scss"
import PropTypes from "prop-types";
import QRCode from "react-qr-code";
import UseTronContext from "../../contexts/TronContext/UseTronContext";
import Context from "../../contexts/TronContext/TronContex";

QrShow.propTypes = {
    code: PropTypes.string.isRequired,
}

export function QrShow(props) {
    const {userWallet} = UseTronContext(Context);
    return (
        <div className={style.qrShow}>
            <div className={style.content}>
                <div className={style.image}>
                    <QRCode value={props.code} level={"L"} title={props.code} size={175} fgColor="#fff" bgColor="transparent"/>
                </div>
                <div>
                    {props.code}
                </div>
            </div>

        </div>
    );
}