import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import {Container} from "react-bootstrap";
import {SendMenu} from "../../components/SendMenu/SendMenu";
import React, {useState} from "react";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {NumList} from "../../components/NumList/NumList";
import {KeyPad, NUMLIST_WITH_DOT} from "../../components/KeyPad/KeyPad";
import {TextBanner} from "../../components/TextBanner/TextBanner";
import {Avatar} from "../../components/Avatar/Avatar";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {AmountText} from "../../components/AmountText/AmountText";
import {FormatNumberInput} from "../../components/Helpers/FormatNumberInput";


export function Amount(props) {
    const [amnt,setAmnt] = useState('0');
    return (
        <>
            <VideoBanner video={video} borderRadius={true} sticky={false}>
                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Send - Enter adress</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <TextBanner>
                    <AmountText currency={'₮'} amount={parseFloat(amnt)} />
                    <p>Your balance $13,242</p>
                    <SpanBadge>Send all</SpanBadge>
                </TextBanner>
                <Container>
                    <SendMenu nextLink={'/amount'} />
                </Container>
            </VideoBanner>
            <Container className={'pt-10'}>
                <KeyPad
                    handleDelete={()=>{
                        const t = amnt.toString();
                        if(t.length>1) {
                            const str = t.substring(0, t.length - 1);
                            setAmnt(str);
                        }
                    }}
                    handleButton={(num)=>{
                        const newAmnt = FormatNumberInput(amnt,num);
                        setAmnt(newAmnt)
                    }}
                    numPad={NUMLIST_WITH_DOT}
                />
            </Container>
        </>
    )
}