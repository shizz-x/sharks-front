import {TopPhoneLayout} from "../../components/Layouts/TopPhoneLayout";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import {PhraseButton} from "../../components/Button/PhraseButton";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import React, {useEffect, useState} from "react";
import {KeyPad, NUMLIST_WITHOUT_DOT} from "../../components/KeyPad/KeyPad";
import {SettingPins} from "../../components/SettingPins/SettingPins";
import {PinHOC} from "../../components/SecurityPassword/PinHOC";



function SettingCode(props) {

    const [title,setTitle] = useState('Enter current password');
    const [step,setStep] = useState(0);
    const checkHandler = (pin)=>{
        console.log(pin);

        switch (step){
            case 0:
                setStep(1);
                setTitle('Enter new password');
                return true;
            case 1:
                setStep(2);
                setTitle('Repeat new password')
                return true;
            default:
                return false;
        }
    }

    useEffect(()=>{
        const fullFill = props.pin.findIndex((val)=>val==='');
        if(fullFill===-1) {

            const result = checkHandler(props.pin);
            if(result) {
                props.clearPins();
            } else {
                const timer = setTimeout(()=>{
                    props.clearPins();
                    clearTimeout(timer);
                },2000)
                props.setErrorCode(true);
            }
        }
    },[props.pin])

    return (
        <FlexColumnLayout minVH={true}>
            <TopPhoneLayout background={true} error={props.errorCode} >
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Change password</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <SettingPins
                    pins={props.pin}
                    title={title}
                    errorCode={props.errorCode}
                />

                <Container>
                    <PhraseButton disable={props.errorCode}>
                        <ArrowIcon leftToRight={true} />
                        <span style={{marginLeft:15,paddingTop:2,display:"inline-block",verticalAlign:-2}}>
                          Confirm
                        </span>
                    </PhraseButton>
                </Container>

            </TopPhoneLayout>
            <Container className={'pt-10'}>
                <KeyPad
                    flexPosition={true}
                    handleDelete={props.handleDelete}
                    handleButton={props.handleButton}
                    numPad={NUMLIST_WITHOUT_DOT}
                />
            </Container>
        </FlexColumnLayout>
    );
}

export default PinHOC(SettingCode);