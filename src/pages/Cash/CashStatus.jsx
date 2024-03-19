import {InfoItem} from "../../components/InfoItem/InfoItem";
import {Link} from "react-router-dom";
import {Button} from "../../components/Button/Button";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/blue_bg.mp4";
import {Menu} from "../../components/Menu/Menu";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import {OrderItem} from "../../components/Order/OrderItem";
import mc from "../../tmp/mc.png";
import {Hr} from "../../components/Order/Hr";
import {StatusContainer} from "../../components/StatusContainer/StatusContainer";
import {STATUS_COMPLETED} from "../../components/StatusContainer/StatusModel";
import React from "react";
import {DelyveryInfo} from "../../components/DelyveryInfo/DelyveryInfo";
import turk from "../../tmp/turkey.png";

export function CashStatus(props){
    const StatusPendingText = ()=>{
        return (
            <>
                <p>Thank you for your cash withdrawal request. Your transaction has been successfully processed.
                    <span style={{color:'#29E13B'}}>Please visit our office to collect your cash.</span> Don't forget to bring your phone with the Sharks Wallet installed for verification.
                    We're excited to see you!</p>
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
                    <Menu.Right thereIsMessage={true}><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
                <FlexColumnLayout minVH={false}>
                    <Container className={'d-flex flex-grow-1 align-items-center'}>
                        <div className={'w-100'}>
                            <DelyveryInfo
                                flag={turk}
                                city={'Istanbul'}
                                info={'Altunizade, Tophanelioğlu Cd. No:19, 34662 Üsküdar/İstanbul, Türkiye'}
                                workingTime={'9 AM - 10 PM'}
                                copy={true}
                            />
                            <Hr />
                            <OrderItem
                                amount={455.5}
                                currency={'₮'}
                                tags={['USDT','MAX $15K']}
                                titleLeftComponent={<span>You pay (мах $13K)</span>}
                                titleRightComponent={<span>Balance <b>$13 242</b></span>}
                            />
                            <Hr />
                            <OrderItem
                                amount={455.5}
                                currency={'₺'}
                                tags={['USD']}
                                titleLeftComponent={<span>You get</span>}
                                titleRightComponent={<span>1 USDT = <b>0.96 USD</b></span>}
                            />
                        </div>
                    </Container>
                </FlexColumnLayout>
            </VideoBanner>
            <StatusContainer title={'Transaction status'} status={STATUS_COMPLETED}>
                <StatusPendingText />
            </StatusContainer>
        </FlexColumnLayout>
    );
}