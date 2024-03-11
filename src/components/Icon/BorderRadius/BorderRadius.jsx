import style from "./BorderRadius.module.scss";
import PropTypes from "prop-types";

BorderRadius.propTypes={
    left: PropTypes.number,
    top:PropTypes.number,
    onClick: PropTypes.func
}


export function BorderRadius(props) {
    const createStyle = (left,top)=>{
        const stl = {};
        if(left) {
            stl.paddingLeft = left;
        }
        if(top) {
            stl.paddingTop = top;
        }
        return stl;
    }


    return(
        <span className={style.borderRadius} style={createStyle(props.left,props.top)} onClick={props.onClick} {...props}>
         {props.children}
        </span>
    );
}