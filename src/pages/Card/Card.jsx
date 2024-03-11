import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/bg.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import React, {useState} from "react";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {NextPastMenu} from "../../components/NextPastMenu/NextPastMenu";
import {TitleWithRightBlock} from "../../components/TitleWithRightBlock/TitleWithRightBlock";
import {Button} from "../../components/Button/Button";
import {QuestIcon} from "../../components/Icon/Quest/QuestIcon";
import {BorderRadius} from "../../components/Icon/BorderRadius/BorderRadius";
import {CardNumber} from "../../components/CardNumber/CardNumber";
import {AddCardMenu} from "../../components/AddCardMenu/AddCardMenu";

export function Card(props) {


    let showCard = ()=>{};


    return(
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={video} borderRadius={true} fullScreen={false} sticky={false} MainBlockComponent={()=><Container><NextPastMenu
                showQRButton={false} nextLink={'/newCard'}
            /></Container>}>
                <Menu>
                    <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                    <Menu.Title>Enter card number</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
                <FlexColumnLayout minVH={false}>
                    <Container className={'d-flex align-items-center flex-grow-1'}>
                        <CardNumber number={''} />
                    </Container>
                </FlexColumnLayout>
            </VideoBanner>
            <Container className={'mt-3'}>
                <TitleWithRightBlock  title={'How to share'} >
                    <BorderRadius><QuestIcon /></BorderRadius>
                </TitleWithRightBlock>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                <div className={'mt-5 pt-5'}>
                    <Button onClick={()=>{showCard()}} className={'fw-bold'}>Create new</Button>
                </div>
            </Container>
            <AddCardMenu
                number={'5105105105105100'}
                cardName={'Sber card'}
                cardColor={'#ED9E29'}
                openHandler={(f)=>{showCard=f;}}
                saveHandler={(result)=>console.log(result)}
            />
        </FlexColumnLayout>
    );
}