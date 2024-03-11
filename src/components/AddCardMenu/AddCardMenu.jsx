import PropTypes from "prop-types";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import style from "./AddCardMenu.module.scss"
import {TitleWithRightBlock} from "../TitleWithRightBlock/TitleWithRightBlock";
import {Container} from "react-bootstrap";
import {DeleteIcon} from "../Icon/Delete/DeleteIcon";
import React, {useEffect, useState} from "react";
import {CardDesign} from "./CardDesign";
import sberImg from "../../tmp/sber.png"
import {Button} from "../Button/Button";
import Form from "react-bootstrap/Form";
import {Input} from "../Form/Input/Input";
import {ColorRadio} from "../Form/ColorRadio/ColorRadio";
import {useSiteMessage} from "../SiteMessage/SiteMessageContext";

AddCardMenu.propTypes={
    number:PropTypes.string.isRequired,
    cardName:PropTypes.string,
    cardColor:PropTypes.string,
    saveHandler:PropTypes.func,
    openHandler:PropTypes.func.isRequired
}
const defaultColor = ['#ED2929','#ED5829','#ED9E29','#BAED29','#1D58D8','#7F29ED','#ED299E'];

export function AddCardMenu(props) {
    const [show,setShow] = useState(false);
    const [cardColor, setCardColor] = useState(props.cardColor?props.cardColor:defaultColor[0]);
    const [cardNum,setCardNum] = useState(props.number);
    const [cardName , setCardName] = useState(props.cardName?props.cardName:'');
    const {showMessage} = useSiteMessage();



    const saveHandler = ()=>{
        const result = {
            color: cardColor,
            name: cardName,
            number:cardNum
        }

        if(props.saveHandler instanceof Function) {
            props.saveHandler(result);
        }

        setShow(false);
    }

    const openDialog = ()=>{
        setShow(true);
    }

    if(props.openHandler instanceof Function) {
        props.openHandler(openDialog);
    }


    return(
        <ShowDependencies dependencies={show}>
            <div className={style.addCardMenu}>
                <Container>
                    <TitleWithRightBlock title={'Create new card'}>
                        <span onClick={()=>setShow(false)}>
                            <DeleteIcon spanClass={style.closeIcon} />
                        </span>
                    </TitleWithRightBlock>
                    <CardDesign number={cardNum} color={cardColor} cardName={cardName}  cardLogo={sberImg}/>
                    <Form>
                        <Input label={'Card number'}
                               changeHandler={(event)=>{
                                   showMessage(()=><p>You’ve entered invalid network currently <b>Sharks wallet</b> supports only <b>TRC-20</b></p>)
                                   setCardNum(event.target.value);
                               }}
                               value={cardNum}
                               maxlength="16"
                               error={true}
                        />
                        <Input label={'Card name'}
                               changeHandler={(event)=>{setCardName(event.target.value)}}
                               value={cardName}
                               maxlength="19"

                        />
                        <ColorRadio
                            colors={defaultColor}
                            checkedColor={cardColor}
                            label={'Pick card color'}
                            checkHandler={(c)=>setCardColor(c)}
                        />
                    </Form>
                    <div className={'mt-4 pt-5'}>
                        <Button onClick={saveHandler} className={'fw-bold'}>Save</Button>
                    </div>
                </Container>
            </div>
        </ShowDependencies>
    )
}