import PropTypes from "prop-types";
import style from "./Select.module.scss"
import classNames from "classnames";
import {BorderRadius} from "../Icon/BorderRadius/BorderRadius";
import {AcceptIcon} from "../Icon/AcceptIcon/AcceptIcon";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";


SelectCountry.propTypes={
    currency:PropTypes.string.isRequired,
    code:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    select: PropTypes.bool,
    onClick:PropTypes.func
}
export function SelectCountry(props){
    return(
        <div className={classNames(style.selectCountry,props.select?style.select:null)} onClick={props.onClick}>
            <div className={style.code} style={{backgroundColor:props.color}} >
                {props.code}
            </div>
            <div className={style.text}>
                <b>{props.currency}</b>
                <span>{props.name}</span>
            </div>
            <ShowDependencies dependencies={props.select}>
                <div className={style.selection}>
                    <div className={style.selectIcon}>
                        <BorderRadius left={4}><AcceptIcon /></BorderRadius>
                    </div>
                </div>
            </ShowDependencies>
        </div>
    );
}