import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import React from "react";
import {TopPhoneLayout} from "../../components/Layouts/TopPhoneLayout";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {SettingMenu} from "../../components/SettingMenu/SettingMenu";
import {Container} from "react-bootstrap";

const menu=[
    {
        title:'Back up seed phrase',
        link:'/settingPhrase'
    },
    {
        title:'Change password',
        link:'/settingCode'
    },
    {
        title:'Address book',
        link:''
    },
    {
        title:'Notifications',
        link:''
    },
    {
        title:'Depeg Alerts',
        link:''
    },
    {
        title:'Transaction Fee Settings',
        link:''
    },
    {
        title:'Prepaid Transaction Packages',
        link:''
    },
    {
        title:'Customize',
        link:''
    },
    {
        title:'About us',
        link:'/settingAbout'
    },
    {
        title:'Privacy policy',
        link:'/settingPrivacy'
    },
]
export function Setting(props) {
    return(
        <FlexColumnLayout minVH={true}>
            <TopPhoneLayout>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Setings</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
            </TopPhoneLayout>
            <Container>
                <SettingMenu menu={menu} />
            </Container>
        </FlexColumnLayout>
    );
}