import {Container} from "react-bootstrap";
import {PinsBlock} from "../SecurityPassword/PinsBlock";
import React from "react";
import PropTypes from "prop-types";

SettingPins.propTypes={
    pins:PropTypes.array.isRequired
}
export function SettingPins(props) {

    return(
        <Container className={'d-flex flex-grow-1 align-items-center'} style={{minHeight:'40vh'}}>
            <div className={'w-100'}>
                <PinsBlock
                    pins={props.pins}
                />
            </div>
        </Container>
    );
}