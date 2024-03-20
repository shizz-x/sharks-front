import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import videoErr from "../../media/red_background.mp4";
import videoOk from "../../media/green_bg.mp4";
import videoRec from "../../media/background_rec.mp4";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Col, Container, Row} from "react-bootstrap";
import {ContactString} from "../../components/ContactString/ContactString";
import av3 from "../../tmp/caracter 28.png";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {AdressString} from "../../components/AdressString/AdressString";
import {AmountText} from "../../components/AmountText/AmountText";
import React, {useEffect, useState} from "react";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {StatusContainer} from "../../components/StatusContainer/StatusContainer";
import {Button} from "../../components/Button/Button";
import {
    STATUS_COMPLETED,
    STATUS_FAILED,
    STATUS_PENDING,
    STATUS_RECEIVED
} from "../../components/StatusContainer/StatusModel";
import {InfoItem} from "../../components/InfoItem/InfoItem";


const StatusPendingText = ()=>{
    return (
        <>
            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a </p>
            <div className={'mt-1 pt-2'}>
                <Link to={"/createWallet"} style={{textDecoration:"none"}}>
                    <Button className={'fw-bold'}>Return to the wallet</Button>
                </Link>
                <Button withoutBorder={true}>View on transscan</Button>
            </div>
        </>
    );
}

const StatusFailedText = ()=>{
    return (
        <>
            <p>Insufficient Balance: Your account does not have enough funds to complete this transaction, including fees.</p>
            <div className={'mt-1 pt-2'}>
                <Link to={"/createWallet"} style={{textDecoration:"none"}}>
                    <Button className={'fw-bold'}>Return to the wallet</Button>
                </Link>
                <Button withoutBorder={true}>View on transscan</Button>
            </div>
        </>
    );
}

const StatusCompletedText = ()=>{
    return (
        <>
            <InfoItem title={'Transaction date'}>
                12 April 2024 12:28
            </InfoItem>
            <InfoItem title={'Transaction Hash'} isCopy={true}>
                3b7c2a68432e70e4985e7bd78ae83d2d894502da4f3118b6553d2b5f692ce183
            </InfoItem>
            <div className={'pt-2'}>
                <Link to={"/createWallet"} style={{textDecoration:"none"}}>
                    <Button className={'fw-bold'}>Return to the wallet</Button>
                </Link>
                <Button withoutBorder={true}>View on transscan</Button>
            </div>
        </>
    );
}

const listStatus = [STATUS_FAILED,STATUS_PENDING,STATUS_COMPLETED,STATUS_RECEIVED];

export function Status(props) {
    const [status,setStatus] = useState(STATUS_PENDING);
    const [img,setImg] = useState(video);

    let ItemShow = ()=>{
        switch (status) {
            case STATUS_COMPLETED:
                return <StatusCompletedText />
            case STATUS_RECEIVED:
                return <StatusCompletedText />
            case STATUS_FAILED:
                return <StatusFailedText />
            case STATUS_PENDING:
                return <StatusPendingText />
        }
    }


    useEffect(()=>{
        const timer = setTimeout(()=>{
            clearTimeout(timer);
            const elem = listStatus.pop();
            switch (elem) {
                case STATUS_COMPLETED:
                    setImg(videoOk);
                    break;
                case STATUS_RECEIVED:
                    setImg(videoRec);
                    break;
                case STATUS_FAILED:
                    setImg(videoErr);
                    break;
                case STATUS_PENDING:
                    setImg(video);
                    break;
            }
            setStatus(elem);
            listStatus.unshift(elem);
        },5000);
        return ()=> clearTimeout(timer);
    },[status])


    return (
        <FlexColumnLayout minVH={true}>
        <VideoBanner
            video={img}
            borderRadius={true}
            sticky={false}
            fullScreen={false}
        >

            <Menu>
                <Menu.Left><Link to={-1}><ArrowIcon/></Link></Menu.Left>
                <Menu.Title>Summary</Menu.Title>
                <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
            </Menu>

                <FlexColumnLayout spaceAgentBefore={true}>
                <Container>
                    <Row>
                        <Col xs={8}><ContactString name={'Justin Calzoni'} image={av3}/></Col>
                        <Col xs={4} className={'text-end'}><SpanBadge>TRC-20</SpanBadge></Col>
                    </Row>
                    <Row>
                        <Col>
                            <AdressString address={'1Lbcfr7sAHTD9CgdQo3HTMTkV8LK4ZnX71'}/>
                        </Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col xs={6}>You’ve sent</Col>
                        <Col xs={6} className={'text-end'}>Commission <b>$12</b></Col>
                    </Row>
                    <Row className={'mt-3'}>
                        <Col xs={6}><AmountText currency={'₮'} amount={142.50} simpleClass={true}/></Col>
                        <Col xs={6} className={'text-end  d-flex flex-column'}>
                            <div className="mt-auto pb-4">
                                <SpanBadge>USDT</SpanBadge>
                            </div>
                        </Col>
                    </Row>
                </Container>
                </FlexColumnLayout>
        </VideoBanner>
        <StatusContainer title={'Transaction status'} status={status}>
            <ItemShow />
        </StatusContainer>
        </FlexColumnLayout>
    );
}