import PropTypes from "prop-types";
import style from "./CityItem.module.scss"
import classNames from "classnames";
import {BorderRadius} from "../Icon/BorderRadius/BorderRadius";
import {AcceptIcon} from "../Icon/AcceptIcon/AcceptIcon";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";

CityItem.propTypes={
    city:PropTypes.string.isRequired,
    country:PropTypes.string.isRequired,
    info:PropTypes.string,
    flag:PropTypes.string.isRequired,
    select: PropTypes.bool,
    onClick:PropTypes.func
}

export function CityItem(props) {
    return (
        <div className={classNames(style.cityItem,props.select?style.select:null)} onClick={()=>{
            if(props.onClick instanceof Function) {
                props.onClick({
                    city:props.city,
                    country:props.country,
                })
            }
        }}>
            <div className={style.flag}>
                <img src={props.flag} alt={props.city}/>
            </div>
            <div className={style.content}>
                <div><b>{props.city}</b></div>
                <div className={style.info}><span>{props.country}</span>{props.info}</div>
            </div>
            <ShowDependencies dependencies={props.select}>
                <div className={style.center}>
                    <div className={style.selectIcon}>
                        <BorderRadius left={4}><AcceptIcon /></BorderRadius>
                    </div>
                </div>
            </ShowDependencies>
        </div>
    );
}