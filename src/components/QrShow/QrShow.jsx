import style from "./QrShow.module.scss"
import PropTypes from "prop-types";

QrShow.propTypes = {
    code: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}

export function QrShow(props) {
    return (
        <div className={style.qrShow}>
            <div className={style.content}>
                <div className={style.image}>
                    <img src={props.image} alt={props.code} width={175} height={175}/>
                </div>
                <div>
                    {props.code}
                </div>
            </div>

        </div>
    );
}