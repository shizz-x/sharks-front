import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {TopPhoneLayout} from "../../components/Layouts/TopPhoneLayout";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import React, {useEffect, useState} from "react";
import {SecretPhrase} from "../../components/SecretPhrase/SecretPhrase";
import {PhraseButton} from "../../components/Button/PhraseButton";
import {EyeIcon} from "../../components/Icon/Eye/EyeIcon";
import {Container} from "react-bootstrap";
import {CenterText} from "../../components/CenterText/CenterText";
import {useSecurityPassword} from "../../components/SecurityPassword/SecurityPasswordContext";
import {CopyIcon} from "../../components/Icon/Copy/CopyIcon";


const phrases = [
    'Justin','Gustavo','Jaxson','Lydia','Paityn','Terry','Miracle','Nolan','Marcus','Tiana','Jaydon','Jaxson'
];

export function SettingPhrase(props) {
    const [show,setShow] = useState(false);
    const {showPasswordWindow,setCheckHandler} = useSecurityPassword();

    useEffect(()=>{
        setCheckHandler((code)=>{
            setShow(true);
            return true;
        });
    },[])

    return(
        <FlexColumnLayout minVH={true}>
            <TopPhoneLayout background={true}>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Back up seed phrase</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <SecretPhrase phrases={phrases} show={show} showNumber={true} />
                <Container>
                    <PhraseButton onClick={()=>showPasswordWindow('Security password','Incorrect password',true)}>
                        {show?
                            <CopyIcon/>
                            :
                            <EyeIcon/>
                        }

                        <span style={{marginLeft:15,paddingTop:2,display:"inline-block",verticalAlign:-2}}>
                            {show?'Copy':'View phrase'}
                        </span>
                    </PhraseButton>
                </Container>

            </TopPhoneLayout>
            <Container className={'d-flex align-items-center flex-grow-1'}>
                <CenterText title={'What is seed phrase?'}>
                    Handle your seed phrase with utmost care. It's your wallet's access key, and losing it means losing your assets. Ensure privacy when noting it down—make sure you're not being watched or recorded. Keep it secure and undisclosed.
                </CenterText>
            </Container>
        </FlexColumnLayout>
    );
}