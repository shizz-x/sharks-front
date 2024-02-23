import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import errVideo from "../../media/red_background.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import React, {useState} from "react";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {SendMenu} from "../../components/SendMenu/SendMenu";
import {TextBanner} from "../../components/TextBanner/TextBanner";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {ContactList} from "../../components/ContactList/ContactList";

import av1 from '../../tmp/caracter 5.png';
import av2 from '../../tmp/caracter 26.png';
import av3 from '../../tmp/caracter 28.png';
import av4 from '../../tmp/caracter 35.png';
import {useSiteMessage} from "../../components/SiteMessage/SiteMessageContext";
import {Avatar} from "../../components/Avatar/Avatar";


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
    const {showMessage} = useSiteMessage();
    const [error,setError] = useState(false);
    const [contactSelect,setContactSelect] = useState(null);

    const ErrorMessage = ()=>{
        return (
            <p className={'mt-2'}>
                You’ve entered invalid network currently <b>Sharks wallet</b> supports only <b>TRC-20</b>
            </p>
        );
    }
    const clickContact = (id)=>{
        const findItem = contactList.find((value)=>value.id === id);
        console.log(findItem);

        setContactSelect(findItem);

        if(findItem.id===1) {
            showMessage(ErrorMessage);
            setError(true);
        } else {
            setError(false);
        }
    }

    const NormalBlock = (props)=>{
        return (
            <>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Send - Enter adress</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <TextBanner>
                    <p>Paste, scan, choose or form your address book valid TRC 20 address</p>
                    <SpanBadge>Paste address</SpanBadge>
                </TextBanner>
            </>
        );
    }

    const SelectBlock = (props)=>{
        return(
            <>

                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Send - Enter adress</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <TextBanner>
                    <Avatar image={contactSelect.image} name={contactSelect.name} />
                    <p>P1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71</p>
                    <SpanBadge>TRC-20</SpanBadge>
                </TextBanner>
            </>
        );
    }

    const ErrorBlock = ()=>{
        return (
            <>

                <TextBanner>
                    <p>P1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71</p>
                    <SpanBadge>Invalid network</SpanBadge>
                </TextBanner>
            </>
        );
    }


    return (
        <>
            <VideoBanner video={error?errVideo:video} borderRadius={true} sticky={false}>
                {error?<ErrorBlock />:contactSelect!==null?<SelectBlock />:<NormalBlock />}
                <Container>
                    <SendMenu showQRButton={true} nextLink={'/amount'} />
                </Container>
            </VideoBanner>
            <div className={'pt-10'}>
             <ContactList contactList={contactList} choiceHandler={clickContact} idSelect={contactSelect!==null?contactSelect.id:null} />
            </div>
        </>
    )
}