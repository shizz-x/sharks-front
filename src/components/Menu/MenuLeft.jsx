import {useSharkMenu} from "./MenuContext";
import {Col} from "react-bootstrap";
import {useEffect} from "react";

export function MenuLeft(props) {

    const {setLeftBlock} = useSharkMenu();

    useEffect(()=>{
        setLeftBlock(true);
        return ()=>setLeftBlock(false)
    },[])

    return(
        <Col xs={{order:1,span:2}}>
            {props.children}
        </Col>
    )
}