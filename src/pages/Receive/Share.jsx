import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/background_rec.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {QrShow} from "../../components/QrShow/QrShow";
import QrImg from "../../tmp/qr.png";
import {Container} from "react-bootstrap";
import {ReceiveMenu} from "../../components/ReceiveMenu/ReceiveMenu";
import {TitleWithRightBlock} from "../../components/TitleWithRightBlock/TitleWithRightBlock";
import {NumList} from "../../components/NumList/NumList";
import React from "react";
import {ConfirmMenu} from "../../components/ConfirmMenu/ConfirmMenu";
import {ReceiveMenuBlack} from "../../components/ReceiveMenu/ReceiveMenuBlack";

export function Share(props) {
    return (
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={video} borderRadius={false} fullScreen={true} sticky={false} MainBlockComponent={()=><ReceiveMenuBlack

            />}>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Receive</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <FlexColumnLayout>
                    <QrShow code={'1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'} image={QrImg} />
                </FlexColumnLayout>
            </VideoBanner>
        </FlexColumnLayout>
    );
}