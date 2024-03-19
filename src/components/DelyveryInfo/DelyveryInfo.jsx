import PropTypes from "prop-types";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import style from "./DelyveryInfo.module.scss"
import {CopyIcon} from "../Icon/Copy/CopyIcon";

DelyveryInfo.propTypes={
    flag: PropTypes.string.isRequired,
    city:PropTypes.string.isRequired,
    info:PropTypes.string.isRequired,
    workingTime:PropTypes.string,
    copy:PropTypes.bool,
    copyHandler:PropTypes.func
}
export function DelyveryInfo(props) {
    return(
        <div className={style.delyveryInfo}>
            <div className={style.cityInfo}>
                <img src={props.flag} alt={props.city} />
                <span className={style.city}>{props.city}</span>
                <ShowDependencies dependencies={props.workingTime!==undefined} >
                    <span className={style.workTime}>({props.workingTime})</span>
                </ShowDependencies>
            </div>
            <div className={style.info}>
                <div className={style.content}>
                    {props.info}
                </div>
                <ShowDependencies dependencies={props.copy}>
                    <div className={style.icon} onClick={props.copyHandler}>
                        <CopyIcon />
                    </div>
                </ShowDependencies>
            </div>
        </div>
    );
}