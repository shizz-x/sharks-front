import style from "./BlurLayout.module.scss"
import {useBlur} from "./BlurContext";

export function BlurLayout(props) {
    const {show,Component} = useBlur();
    return(
        <>
            <div className={show?style.overFlow:null}>
                <div className={show?style.blurLayout:null}>
                    {props.children}
                </div>
            </div>
            {show?Component:<></>}
        </>
    );
}