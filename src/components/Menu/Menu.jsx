import {MenuLeft} from "./MenuLeft";
import {MenuTitle} from "./MenuTitle";
import {MenuRight} from "./MenuRight";
import {Container, Row} from "react-bootstrap";
import {MenuContext} from "./MenuContext";
import style from "./Menu.module.scss"



function MenuTop(props) {
    return(
        <MenuContext>
           <Container className={style.menu}>
               <Row>
                   {props.children}
               </Row>
           </Container>
        </MenuContext>
    )
}

export const Menu = Object.assign(MenuTop,{
    Left: MenuLeft,
    Title: MenuTitle,
    Right: MenuRight
})