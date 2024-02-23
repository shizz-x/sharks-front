import PropTypes from "prop-types";
import style from "./Avatar.module.scss"

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}
export function Avatar(props) {
    return (
        <div className={style.avatar}>
            <div className={style.row}>
                <div className={style.image}>
                    <span style={{ backgroundImage:'url("'+props.image+'")'}}/>
                </div>
            </div>
            <div className={style.row}>
                <span className={style.text}>{props.name}</span>
            </div>
        </div>
    );
}