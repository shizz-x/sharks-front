import PropTypes from "prop-types";
import style from "./SettingMenu.module.scss"
import classNames from "classnames";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import {LeftArrowIcon} from "../Icon/LeftArrow/LeftArrowIcon";
import {useNavigate} from "react-router-dom";
import {SpanBadge} from "../SpanBadge/SpanBadge";

SettingMenu.propTypes={
    menu: PropTypes.array.isRequired
}
export function SettingMenu(props) {
    const navigate = useNavigate();
    return(
        <div className={style.settingMenu}>
            {props.menu.map((ele,key)=>(
                <div key={key} className={classNames(style.item,ele.link===''?style.disable:null)} onClick={()=>{
                  if(ele.link!=='') {
                        navigate(ele.link);
                  }
                }}>
                    <div className={style.title}>{ele.title}</div>
                    <ShowDependencies dependencies={ele.link!==''}>
                        <div className={style.arrow}>
                            <LeftArrowIcon />
                        </div>
                    </ShowDependencies>
                    <ShowDependencies dependencies={ele.link===''}>
                        <div className={style.commingSoon}>
                            <SpanBadge>Coming soon</SpanBadge>
                        </div>
                    </ShowDependencies>
                </div>
            ))}

        </div>
    );
}