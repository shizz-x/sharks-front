import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import errVideo from "../../media/red_background.mp4";
import {Container} from "react-bootstrap";
import {SendMenu} from "../../components/SendMenu/SendMenu";
import React, {useEffect, useState} from "react";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ArrowIcon} from "../../components/Icon/Arrow/ArrowIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {KeyPad, NUMLIST_WITH_DOT} from "../../components/KeyPad/KeyPad";
import {TextBanner} from "../../components/TextBanner/TextBanner";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {AmountText} from "../../components/AmountText/AmountText";
import {FormatNumberInput} from "../../components/Helpers/FormatNumberInput";
import {useSiteMessage} from "../../components/SiteMessage/SiteMessageContext";
import UseTronContext from "../../contexts/TronContext/UseTronContext"


export function Amount(props) {
    const {showMessage} = useSiteMessage();
    const [amnt,setAmnt] = useState('0');
    const [err,setErr] = useState(false);
    const {userWallet} = UseTronContext();

    useEffect(()=>{
        const num = parseFloat(amnt);
        console.log(userWallet)
        if(!isNaN(num)) {
            if(num>userWallet.tokens[0].parsed) {
                setErr(true);
                showMessage(()=><p>Your account lacks sufficient funds. Please consider reducing the amount.</p>);
            } else {
              setErr(false);
            }
        }
    },[amnt])

    const createNextUrl = (amount) => {
        const url  = new URL(window.location.href);

        const path = '/summary';
        const queryParams = new URLSearchParams({ recipient: url.searchParams.get("recipient"), amount: parseFloat(amount) });
        const pathwithparams = `${path}?${queryParams.toString()}`;
        
        return pathwithparams;
      }

    

    return (
        <>
            <VideoBanner video={err?errVideo:video} borderRadius={true} sticky={false}>

                <Menu>
                    <Menu.Left><Link to={-1}><ArrowIcon /></Link></Menu.Left>
                    <Menu.Title>Send - Enter adress</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>


                <TextBanner>
                    <AmountText currency={'₮'} amount={parseFloat(amnt)} />
                    <p>Your balance ${new Intl.NumberFormat('en-EN').format(userWallet.tokens[0].parsed)}</p>
                    {err?<SpanBadge>Insufficient balance</SpanBadge>:<SpanBadge onClick={()=>setAmnt(userWallet.tokens[0].parsed)}>Send all</SpanBadge>}
                </TextBanner>
                <Container>
                    <SendMenu nextLink={amnt>0?createNextUrl(amnt):"/null"}  />
                </Container>
            </VideoBanner>
            <Container className={'pt-10'}>
                <KeyPad
                    flexPosition={true}
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
                    title={'Enter amount'}
                    numPad={NUMLIST_WITH_DOT}
                />
            </Container>
        </>
    )
}