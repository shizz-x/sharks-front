import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import React, {useEffect} from "react";
import {ConfirmMenu} from "../../components/ConfirmMenu/ConfirmMenu";
import {SummaryBlock} from "../../components/SummaryBlock/SummaryBlock";
import {Col, Container, Row} from "react-bootstrap";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {ContactString} from "../../components/ContactString/ContactString";
import av3 from '../../tmp/caracter 28.png';
import {AdressString} from "../../components/AdressString/AdressString";
import {AmountText} from "../../components/AmountText/AmountText";
import {useSecurityPassword} from "../../components/SecurityPassword/SecurityPasswordContext";

export function Summary(props) {
    const {showPasswordWindow,setCheckHandler} = useSecurityPassword();

    const passHandler=(num) =>{
        console.log(num)
    }

    useEffect(()=>{
        setCheckHandler(passHandler)
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
                    confirmHandler={()=>showPasswordWindow('Security password','Incorrect password',true)}
                />}
            >

                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Summary</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <SummaryBlock>
                    <Container >
                        <Row>
                            <Col xs={8}><ContactString name={'Justin Calzoni'} image={av3}  /></Col>
                            <Col xs={4} className={'text-end'}><SpanBadge>TRC-20</SpanBadge></Col>
                        </Row>
                        <Row>
                            <Col>
                                <AdressString address={'1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'} />
                            </Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col xs={6}>You’ve sent</Col>
                            <Col xs={6} className={'text-end'}>Commission <b>$12</b></Col>
                        </Row>
                        <Row className={'mt-3'}>
                            <Col xs={6}><AmountText currency={'₮'} amount={142.50} simpleClass={true}/></Col>
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