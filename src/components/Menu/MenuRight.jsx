import {useSharkMenu} from "./MenuContext";
import {Col} from "react-bootstrap";
import {useEffect} from "react";
import classNames from "classnames";

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
        <Col className={classNames('text-end')} xs={{order:3,offset:offset,span:2}}>
            {props.children}
        </Col>
    );
}