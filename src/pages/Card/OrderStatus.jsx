import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/blue_bg.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {Container} from "react-bootstrap";
import {OrderItem} from "../../components/Order/OrderItem";
import mc from "../../tmp/mc.png";
import {Hr} from "../../components/Order/Hr";
import React from "react";
import {StatusContainer} from "../../components/StatusContainer/StatusContainer";
import {Button} from "../../components/Button/Button";
import {
    STATUS_COMPLETED,
    STATUS_FAILED,
    STATUS_PENDING,
    STATUS_RECEIVED
} from "../../components/StatusContainer/StatusModel";
import {InfoItem} from "../../components/InfoItem/InfoItem";






export function OrderStatus(props) {

    const StatusPendingText = ()=>{
        return (
            <>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
                <InfoItem title={'Withdraw date'}>
                    12 April 2024 12:28
                </InfoItem>
                <div className={'mt-1 pt-2'}>
                    <Link to={"/createWallet"} style={{textDecoration:"none"}}>
                        <Button className={'fw-bold'}>Return to the wallet</Button>
                    </Link>
                </div>
            </>
        );
    }



    return(
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={video} borderRadius={true} fullScreen={false} sticky={false}>
                <Menu>
                    <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                    <Menu.Title>Order  #43243 </Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
                <FlexColumnLayout minVH={false}>
                    <Container className={'d-flex flex-grow-1 align-items-center'}>
                        <div className={'w-100'}>
                            <OrderItem
                                tags={['USD']}
                                cardNumber={'5433 4213 4432 5256'}
                                titleLeftComponent={<span>To card </span>}
                                titleRightComponent={<span>Sberbank</span>}
                                cardImage={mc}
                            />
                            <Hr />
                            <OrderItem
                                amount={140.23}
                                tags={['USDT','MAX $15K']}
                                titleLeftComponent={<span>You pay (мах $13K)</span>}
                                titleRightComponent={<span>Balance <b>$13 242</b></span>}
                            />
                            <Hr />
                            <OrderItem
                                amount={142.00}
                                tags={['USD']}
                                titleLeftComponent={<span>You get</span>}
                                titleRightComponent={<span>1 USDT = <b>0.96 USD</b></span>}
                            />
                        </div>
                    </Container>
                </FlexColumnLayout>
            </VideoBanner>
            <StatusContainer title={'Withdraw status'} status={STATUS_COMPLETED}>
                <StatusPendingText />
            </StatusContainer>
        </FlexColumnLayout>
    );
}