import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import {Container} from "react-bootstrap";
import {DropDownMenu} from "../../components/NextPastMenu/DropDownMenu";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import React, {useEffect, useState} from "react";
import {SelectListCity} from "../../components/Select/SelectListCity";
import {useBlur} from "../../components/Layouts/BlurContext";
import {OrderItem} from "../../components/Order/OrderItem";
import {Hr} from "../../components/Order/Hr";
import {KeyPad, NUMLIST_WITH_DOT} from "../../components/KeyPad/KeyPad";
import {FormatNumberInput} from "../../components/Helpers/FormatNumberInput";
import {useSiteMessage} from "../../components/SiteMessage/SiteMessageContext";
import videoErr from "../../media/red_background.mp4";

const cities = [
    {
        code:"₺",
        name:"Turkish Lyra",
        currency:"TRY",
        color:"#FA0000"
    },
    {
        code:"$",
        name:"US Dollar",
        currency:"USDT",
        color:"#338A1E"
    },

]
export function CashAmount(props) {
    const {blurWindow} = useBlur();
    const [amnt,setAmnt] = useState('0');
    const [err,setErr] = useState(false);
    const balance = 142.50;
    const {showMessage}= useSiteMessage();
    const CurrencyList = ()=>{
        return (
            <SelectListCity list={cities} onSave={(val)=>{console.log(val)}}/>
        );
    }

    useEffect(()=>{
        const num = parseFloat(amnt);
        if(!isNaN(num)) {
            if(num>balance) {
                setErr(true);
                showMessage(()=><p>Your transaction overpass maximum limit to withrow</p>);
            } else {
                setErr(false);
            }
        }
    },[amnt])

    return( <FlexColumnLayout minVH={true}>
        <VideoBanner video={err?videoErr:video} borderRadius={true} fullScreen={false} sticky={false} MainBlockComponent={()=><Container>
            <DropDownMenu
                dropTitle={'1 USDT = 0.33 TRY'}
                nextLinkDisabled={err}
                nextLink={'/cashConfirm'}
                dropHandler={()=>blurWindow(true,<CurrencyList />)}
            />
        </Container>}>
            <Menu>
                <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                <Menu.Title>Withdraw in cash</Menu.Title>
                <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
            </Menu>
            <FlexColumnLayout minVH={false}>

                    <Container className={'mt-5'}>
                        <OrderItem
                            amount={amnt}
                            tags={['USDT','MAX $15K']}
                            titleLeftComponent={<span>You pay (мах $13K)</span>}
                            titleRightComponent={<span>Balance <b>$13 242</b></span>}
                        />
                        <Hr />
                        <OrderItem
                            amount={balance}
                            tags={['USD']}
                            titleLeftComponent={<span>You get</span>}
                            titleRightComponent={<span>1 USDT = <b>0.96 USD</b></span>}
                        />
                    </Container>


            </FlexColumnLayout>
        </VideoBanner>
        <KeyPad
            flexPosition={true}
            title={'Enter amount'}
            numPad={NUMLIST_WITH_DOT}
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
        />
    </FlexColumnLayout>);
}