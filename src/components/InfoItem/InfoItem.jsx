import style from "./InfoItem.module.scss"
import PropTypes from "prop-types";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import {CopyIcon} from "../Icon/Copy/CopyIcon";
import {useRef} from "react";


InfoItem.propTypes = {
    title: PropTypes.string.isRequired,
    isCopy: PropTypes.bool
}


export function InfoItem(props) {
    const textAreaRef = useRef(null);

    const copyHandler =   (e) =>{
        const text = textAreaRef.current.innerText;
        navigator.clipboard.writeText(text).catch(err=>console.error(err));
    };

    return (
        <div className={style.infoItem}>
            <div className={style.title}>
                {props.title}
            </div>
            <div className={style.text}>
                <div ref={textAreaRef}>{props.children}</div>
                <ShowDependencies dependencies={props.isCopy}>
                    <div>
                        <span onClick={copyHandler}><CopyIcon spanClass={style.copy} /></span>
                    </div>
                </ShowDependencies>
            </div>
        </div>
    );
}