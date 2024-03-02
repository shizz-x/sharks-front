import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import video from "../../media/background_rec.mp4";
import {Container} from "react-bootstrap";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import React from "react";
import {NumList} from "../../components/NumList/NumList";
import {TitleWithRightBlock} from "../../components/TitleWithRightBlock/TitleWithRightBlock";
import {QrShow} from "../../components/QrShow/QrShow";
import QrImg from "../../tmp/qr.png";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {ReceiveMenu} from "../../components/ReceiveMenu/ReceiveMenu";


const numList = [
    {
        text:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a",
        select:true
    },
    {
        text:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate th",
        select:true
    },
    {
        text:"In publishing and graphic design, Lorem ipsum is a placeholder text commonly",
        select:true
    }

]
export function Receive(props){
    return(
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={video} borderRadius={true} sticky={false}>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Receive</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <FlexColumnLayout>
                    <QrShow code={'1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'} image={QrImg} />
                    <Container>
                        <ReceiveMenu shareLink={'/share'} />
                    </Container>
                </FlexColumnLayout>
            </VideoBanner>
            <Container className={'mt-3'}>
                <TitleWithRightBlock  title={'How to share'}/>
                <NumList list={numList} hideLine={true} />
            </Container>
        </FlexColumnLayout>
    );
}