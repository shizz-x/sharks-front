import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {TopPhoneLayout} from "../../components/Layouts/TopPhoneLayout";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import React from "react";
import {Title} from "../../components/Title/Title";

export function Privacy(props) {
    return(
        <FlexColumnLayout minVH={true}>
            <TopPhoneLayout>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Privacy Policy</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
            </TopPhoneLayout>
            <Container>
                <div className={'mt-3'}>
                  <Title>Privacy Policy</Title>
                    <p>Sharks Wallet, hereinafter referred to as "we" or "our," is committed to safeguarding the privacy of users (hereinafter also referred to as "you") as outlined below. This document, along with the Terms of Use, delineates the various ways in which Sharks Wallet interacts with user data. It has been crafted in accordance with virtual world personal data protection laws and the General Data Protection Regulation (EU) 2016/679.
                    </p>
                </div>
                <div className={'mt-5'}>
                    <Title>User Consent and Acknowledgment</Title>
                    <p>By using our Wallet, you acknowledge and consent to the collection of data and our entire Privacy Policy.
                    </p>
                </div>
                <div className={'mt-5'}>
                    <Title>Collection and Use of Personal Information</Title>
                    <p>We collect the following categories of personal data:
                        <br/>
                        - Information necessary for the "Know Your Customer" procedure: your name, nationality, citizenship, home address, email address, personal ID code; copies of identity and other documents, selfie photo, date of birth, etc.;<br/>
                        - Information required for compliance with Anti-Money Laundering Regulations and Procedures: financial data, ownership and source of funds and/or wealth, transaction data, and the nature of using the service, e.g., transaction sums, transaction history, counter-parties, bank account, and card number(s), and account holders, among other information;<br/>
                        - Data that identifies you, such as your IP address, language, country, browser type and version, time zone setting, browser plug-in types, some location information, operating system and version, page response times, download errors, user behavior on web pages, and other actions;<br/>
                        - Other personal data shared with us or obtained legally from other sources.<br/>
                    </p>
                </div>
            </Container>
        </FlexColumnLayout>
    );
}