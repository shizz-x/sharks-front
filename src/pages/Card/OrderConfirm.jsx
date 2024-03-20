import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/blue_bg.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link, useNavigate} from "react-router-dom";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {Container} from "react-bootstrap";
import {OrderItem} from "../../components/Order/OrderItem";
import {Hr} from "../../components/Order/Hr";
import React, {useEffect, useState} from "react";
import mc from "../../tmp/mc.png"

import {ConfirmMenu} from "../../components/ConfirmMenu/ConfirmMenu";
import {useSecurityPassword} from "../../components/SecurityPassword/SecurityPasswordContext";

export function OrderConfirm(props) {
    const {showPasswordWindow,setCheckHandler} = useSecurityPassword();
    const navigate = useNavigate();

    useEffect(()=>{
        setCheckHandler((code)=>{
            const err = Math.random()>=0.5;
            if(err){
                navigate('/orderStatus')
            }
            return err;
        });
    },[])
    const DefaultMenu = ()=>{
        return(
            <Container className={'mt-3'}>
                <ConfirmMenu
                    backLink={-1}
                    confirmHandler={()=>showPasswordWindow('Security password','Incorrect password',true)}
                />
            </Container>
        );
    }

    return (
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={video} borderRadius={true} fullScreen={true} sticky={false} MainBlockComponent={DefaultMenu}>
                <Menu>
                    <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                    <Menu.Title>Order  #43243 </Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
                <FlexColumnLayout minVH={false}>
                    <Container className={'d-flex flex-grow-1 align-items-center'}>
                        <div className={'w-100 mb-5 pb-5'}>
                            <OrderItem
                                tags={['USD']}
                                cardNumber={'5433 4213 4432 5256'}
                                titleLeftComponent={<span>To card </span>}
                                titleRightComponent={<span>Sberbank</span>}
                                cardImage={mc}
                            />
                        <Hr />
                        <OrderItem
                            amount={0}
                            tags={['USDT','MAX $15K']}
                            titleLeftComponent={<span>You pay (мах $13K)</span>}
                            titleRightComponent={<span>Balance <b>$13 242</b></span>}
                        />
                        <Hr />
                        <OrderItem
                            amount={0}
                            tags={['USD']}
                            titleLeftComponent={<span>You get</span>}
                            titleRightComponent={<span>1 USDT = <b>0.96 USD</b></span>}
                        />
                        </div>
                    </Container>
                </FlexColumnLayout>
            </VideoBanner>
        </FlexColumnLayout>
    );
}