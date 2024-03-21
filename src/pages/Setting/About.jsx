import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {TopPhoneLayout} from "../../components/Layouts/TopPhoneLayout";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import React from "react";
import {Container} from "react-bootstrap";
import logo from "../../media/about.svg"

export function About(props) {
    return(
        <FlexColumnLayout minVH={true} bottomShadow={true}>
            <TopPhoneLayout>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>About us</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
            </TopPhoneLayout>
            <Container>
                <div className={'text-center mt-4'}>
                    <img src={logo} alt={'logo'}/>
                </div>
                <div className={'text-center mt-4'}>
                    <p>At Sharks, we're dedicated to pioneering secure, user-friendly blockchain solutions. Our journey began with a commitment to enhancing financial inclusivity and privacy through innovative technology. Our team, comprised of experts in blockchain, cybersecurity, and fintech, is passionate about empowering individuals and businesses worldwide. We believe in building trust and delivering excellence, aiming to redefine the digital asset experience with our cutting-edge crypto wallet and services, ensuring everyone, everywhere, can access the world of cryptocurrencies safely and efficiently.</p>

                    <p>Building on our core values, we aim to expand globally, aspiring to become a standalone financial institution. Our ambition is to revolutionize access to financial services, making them universally available, thereby establishing ourselves as a key player on the international stage. Through innovation, dedication, and a commitment to security and user empowerment, we envision setting new standards in the financial industry, making digital finance accessible, secure, and efficient for all.</p>
                </div>
            </Container>
        </FlexColumnLayout>
    );

}