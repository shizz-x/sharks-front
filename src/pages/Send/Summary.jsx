import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link, useRoutes} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import React, {useEffect, useState} from "react";
import {ConfirmMenu} from "../../components/ConfirmMenu/ConfirmMenu";
import {SummaryBlock} from "../../components/SummaryBlock/SummaryBlock";
import {Col, Container, Row} from "react-bootstrap";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {ContactString} from "../../components/ContactString/ContactString";
import av3 from '../../tmp/caracter 28.png';
import {AdressString} from "../../components/AdressString/AdressString";
import {AmountText} from "../../components/AmountText/AmountText";
import {useSecurityPassword} from "../../components/SecurityPassword/SecurityPasswordContext";
import {useNavigate} from 'react-router-dom';
import UseTronContext from "../../contexts/TronContext/UseTronContext";
import av1 from '../../tmp/caracter 5.png';
import av2 from '../../tmp/caracter 26.png';
import av33 from '../../tmp/caracter 28.png';
import av4 from '../../tmp/caracter 35.png';
import avAnon from "../../tmp/character anon.png"


const contactList = [
    {
        id:1,
        name: 'Desirae Vetrovs',
        wallet: 'TD5PjQFydr5xPAYh5CxNbGB5nEmTCcsWrgs',
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
        image: av33
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
        wallet: 'TD5PjQFydr5xPAYh5CxNbGB5nEmTCcsWrg',
        image: av33
    },
]

const contactSelected = {
    id:0,
    name: 'Justin Calzoni',
    wallet: 'TD5PjQFydr5xPAYh5CxNbGB5nEmTCcsWrg',
    image: av3
};
export function Summary(props) {
    const {showPasswordWindow,setCheckHandler} = useSecurityPassword();
    const {userWallet, transferTokens} = UseTronContext();
    const navigate = useNavigate();

    const [summury, setSummary] = useState({ recipient: "", amount: 0 });

    const passHandler=async(num) =>{
        console.log(123);

        const hash = await transferTokens(userWallet.tokens[0].contractAddress,summury.amount*10**userWallet.tokens[0].decimals,summury.recipient)
        navigate('/status?hash='+hash);
        
    }
    const checkParams = () => {
        const url = new URL(window.location.href);

        const amount = parseFloat(url.searchParams.get("amount"));
        const recipient = url.searchParams.get("recipient");

        if(recipient && amount){
            if(amount<=userWallet.tokens[0].parsed && window.tronUtils.isAddressValid(recipient)){
                setSummary({recipient, amount})
                

                const findItem = contactList.find((value)=>value.wallet === recipient);
                console.log(findItem);

            }
        }
    }



    useEffect(()=>{
        checkParams();

        setCheckHandler(passHandler);
    },[])

    return (
        <>
            <VideoBanner
                video={video}
                borderRadius={true}
                sticky={false}
                fullScreen={true}
                MainBlockComponent={()=><ConfirmMenu
                    backLink={-1}
                    confirmLink={window.location.href}
                    confirmHandler={()=>passHandler()}
                />}
            >

                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Summary</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <SummaryBlock>
                    <Container>
                        <Row>
                            <Col xs={8}><ContactString name={contactSelected.name} image={contactSelected.image}  /></Col>
                            <Col xs={4} className={'text-end'}><SpanBadge>TRC-20</SpanBadge></Col>
                        </Row>
                        <Row>
                            <Col>
                                <AdressString address={summury.recipient!==""?summury.recipient:contactSelected.wallet} />
                            </Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col xs={6}>You’ve sent</Col>
                            <Col xs={6} className={'text-end'}>Commission <b>${userWallet.tokens[0].fees.usd}</b></Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col xs={6}><AmountText currency={'₮'} amount={summury.amount} simpleClass={true}/></Col>
                            <Col xs={6} className={'text-end  d-flex flex-column' }>
                                <div className="mt-auto pb-4">
                                    <SpanBadge>USDT</SpanBadge>
                                </div>
                            </Col>
                        </Row>
                    </Container>

                </SummaryBlock>

            </VideoBanner>

        </>
    )
}