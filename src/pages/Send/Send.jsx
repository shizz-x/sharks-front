import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import React from "react";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {SendMenu} from "../../components/SendMenu/SendMenu";
import {TextBanner} from "../../components/TextBanner/TextBanner";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {ContactList} from "../../components/ContactList/ContactList";

import av1 from '../../tmp/caracter 5.png';
import av2 from '../../tmp/caracter 26.png';
import av3 from '../../tmp/caracter 28.png';
import av4 from '../../tmp/caracter 35.png';


const contactList = [
    {
        id:1,
        name: 'Desirae Vetrovs',
        wallet: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        image: av1
    },
    {
        id:2,
        name: 'Adison Dokidis',
        wallet: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        image: av2
    },
    {
        id:3,
        name: 'Justin Calzoni',
        wallet: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        image: av3
    },
    {
        id:4,
        name: 'Ashlynn Passaquindici Arcand',
        wallet: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        image: av4
    },
    {
        id:5,
        name: 'Adison Dokidis',
        wallet: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        image: av2
    },
    {
        id:6,
        name: 'Justin Calzoni',
        wallet: '1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71',
        image: av3
    },
]

export function Send(props){
    const clickContact = (id)=>{
        const findItem = contactList.find((value)=>value.id === id);
        console.log(findItem);
    }

    return (
        <>
            <VideoBanner video={video} borderRadius={true} sticky={false}>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Send - Enter adress</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <TextBanner>
                    <p>Paste, scan, choose or form your address book valid TRC 20 address</p>
                    <SpanBadge>Paste address</SpanBadge>
                </TextBanner>

                <Container>
                    <SendMenu />
                </Container>
            </VideoBanner>
            <Container className={'pt-10'}>
             <ContactList contactList={contactList} choiceHandler={clickContact}/>
            </Container>
        </>
    )
}