import {Col} from "react-bootstrap";
import {useSharkMenu} from "./MenuContext";
import {useEffect} from "react";
import classNames from "classnames";
import style from "./Menu.module.scss"

export function MenuTitle(props){
    const {setTitleBlock,isLeftBlock} = useSharkMenu();

    useEffect(()=>{
        setTitleBlock(true);
        return ()=>setTitleBlock(false)
    },[])

    return (
        <Col xs={{order:2,offset:!isLeftBlock?2:0,span:8}} className={classNames('text-center',style.title)}>
            <span className={'align-middle'}>{props.children}</span>
        </Col>
    );
}