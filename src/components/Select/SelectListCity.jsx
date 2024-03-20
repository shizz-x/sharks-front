import PropTypes from "prop-types";
import {SelectCountry} from "./SelectCountry";
import style from "./Select.module.scss"
import {Container} from "react-bootstrap";
import {TitleWithRightBlock} from "../TitleWithRightBlock/TitleWithRightBlock";
import {DeleteIcon} from "../Icon/Delete/DeleteIcon";
import {useBlur} from "../Layouts/BlurContext";
import {Button} from "../Button/Button";
import React, {useState} from "react";

SelectListCity.propTypes = {
    list: PropTypes.array.isRequired,
    onSave:PropTypes.func
}
export function SelectListCity(props) {
    const {blurWindow} = useBlur();
    const [select,setSelect] = useState({code:''});

    return(
        <div className={style.selectList}>
            <div className={style.container}>
                <div className={style.listBlock}>
                    <Container>
                        <TitleWithRightBlock title={'Chose withdraw currency'}>
                            <span onClick={()=>blurWindow(false)}><DeleteIcon spanClass={style.closeWindow} /></span>
                        </TitleWithRightBlock>
                    </Container>
                    {props.list.map((val,key)=>(
                        <SelectCountry
                            key={key}
                            color={val.color}
                            currency={val.currency}
                            code={val.code}
                            name={val.name}
                            select={select.code === val.code}
                            onClick={()=>{setSelect(val)}}
                        />
                    ))}
                        <Container className={'mt-4'}>
                            <Button onClick={()=>{
                                if(props.onSave instanceof Function) {
                                    if(select.code!=='') props.onSave(select);
                                }
                                blurWindow(false);
                            }}>
                                Select
                            </Button>
                        </Container>

                </div>
            </div>
        </div>
    );

}