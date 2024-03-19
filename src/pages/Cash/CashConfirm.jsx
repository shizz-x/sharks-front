import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link, useNavigate} from "react-router-dom";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import {OrderItem} from "../../components/Order/OrderItem";
import mc from "../../tmp/mc.png";
import {Hr} from "../../components/Order/Hr";
import React, {useEffect} from "react";
import {useSecurityPassword} from "../../components/SecurityPassword/SecurityPasswordContext";
import {ConfirmMenu} from "../../components/ConfirmMenu/ConfirmMenu";
import {DelyveryInfo} from "../../components/DelyveryInfo/DelyveryInfo";
import turk from "../../tmp/turkey.png"
export function CashConfirm(props) {
    const {showPasswordWindow,setCheckHandler} = useSecurityPassword();
    const navigate = useNavigate();

    useEffect(()=>{
        setCheckHandler((code)=>{
            const err = Math.random()>=0.5;
            if(err){
                navigate('/cashStatus')
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
        </FlexColumnLayout>
    );

}