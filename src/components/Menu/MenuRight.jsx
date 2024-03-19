import {useSharkMenu} from "./MenuContext";
import {Col} from "react-bootstrap";
import {useEffect} from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import style from "./Menu.module.scss"


MenuRight.propTypes={
    thereIsMessage: PropTypes.bool
}
export function MenuRight(props) {
    const {setRightBlock,isLeftBlock,isTitleBlock} = useSharkMenu();

    useEffect(()=>{
        setRightBlock(true);
        return ()=>setRightBlock(false)
    },[])

    let offset = 0;
    if(!isTitleBlock) {
        offset +=8;
        if(!isLeftBlock) {
            offset+=2;
        }
    }

    return(
        <Col className={classNames('text-end position-relative')} xs={{order:3,offset:offset,span:2}}>
            {props.children}
            <ShowDependencies dependencies={props.thereIsMessage}>
                <span className={style.newMessage}></span>
            </ShowDependencies>
        </Col>
    );
}