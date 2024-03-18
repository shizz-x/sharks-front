import PropTypes from "prop-types";
import style from "./CityBadge.module.scss";

CityBadge.propTypes= {
    city:PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    info: PropTypes.string,
    component:PropTypes.element

}

export function CityBadge(props) {
    return(
        <div className={style.cityBadge}>
            <div className={style.flag}>
                <img src={props.flag} alt={props.city} />
            </div>
            <div className={style.city}>
                {props.city}
            </div>
            {props.info?
                <div className={style.info}>
                    {props.info}
                </div>
                :<></>
            }
            {props.component?
                props.component
                :
                <></>
            }
        </div>
    );
}