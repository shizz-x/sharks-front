import {Container} from "react-bootstrap";
import {PinsBlock} from "../SecurityPassword/PinsBlock";
import React from "react";
import PropTypes from "prop-types";
import style from "./SettingPins.module.scss"
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import {SpanBadge} from "../SpanBadge/SpanBadge";

SettingPins.propTypes={
    pins:PropTypes.array.isRequired,
    errorCode:PropTypes.bool,
    title: PropTypes.string.isRequired
}
export function SettingPins(props) {

    return(
        <Container className={'d-flex flex-grow-1 align-items-center'} style={{minHeight:'40vh'}}>
            <div className={style.settingPins}>
                <div className={style.title}>
                    {props.title}
                </div>
                <PinsBlock
                    pins={props.pins}
                    error={props.errorCode}
                />
                <ShowDependencies dependencies={props.errorCode}>
                    <div className={style.error}>
                        <SpanBadge>Incorrect password</SpanBadge>
                    </div>
                </ShowDependencies>

            </div>
        </Container>
    );
}