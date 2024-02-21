import classNames from "classnames";
import style from "./KeyPad.module.scss";
import {BackspaceIcon} from "../Icon/Backspace/BackspaceIcon";
import PropTypes from "prop-types";


export const BACKSPACE_BTN = 'backspace';

export const NUMLIST_WITHOUT_DOT = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    ['',0,BACKSPACE_BTN],
];
export const NUMLIST_WITH_DOT = [
    [7,8,9],
    [4,5,6],
    [1,2,3],
    ['.',0,BACKSPACE_BTN],
];


KeyPad.propTypes = {
    handleDelete: PropTypes.func.isRequired,
    handleButton: PropTypes.func.isRequired,
    numPad: PropTypes.array
}

export function KeyPad({numPad=NUMLIST_WITHOUT_DOT,...props}) {
    return(
        <div className={classNames(style.numbersBlock)}>
            {numPad.map((item,key)=>(
                <div className={style.rowNum} key={key}>
                    {item.map((num,keyNum)=>(
                        <div
                            key={keyNum}
                            onClick={num===BACKSPACE_BTN?props.handleDelete:()=>props.handleButton(num)}
                            className={style.item}
                        >
                            {num===BACKSPACE_BTN?<BackspaceIcon />:num}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}