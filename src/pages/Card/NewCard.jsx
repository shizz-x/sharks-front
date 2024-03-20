import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/bg.mp4";
import videoErr from "../../media/red_background.mp4";
import {Container} from "react-bootstrap";
import {NextPastMenu} from "../../components/NextPastMenu/NextPastMenu";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {CardNumber} from "../../components/CardNumber/CardNumber";
import {TitleWithRightBlock} from "../../components/TitleWithRightBlock/TitleWithRightBlock";
import {BorderRadius} from "../../components/Icon/BorderRadius/BorderRadius";
import React, {useEffect, useState} from "react";
import {PlusIcon} from "../../components/Icon/Plus/PlusIcon";
import sberImg from "../../tmp/sber.png"
import {CardList} from "../../components/CardList/CardList";
import {KeyPad,  NUMLIST_WITHOUT_DOT} from "../../components/KeyPad/KeyPad";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {useSiteMessage} from "../../components/SiteMessage/SiteMessageContext";
import mcImg from "../../tmp/mc.png"
import {ArrowDownIcon} from "../../components/Icon/ArrowDown/ArrowDownIcon";
import {Select} from "../../components/Select/Select";
import {useSecurityPassword} from "../../components/SecurityPassword/SecurityPasswordContext";
import {BlurLayout} from "../../components/Layouts/BlurLayout";
import {useBlur} from "../../components/Layouts/BlurContext";
import {SelectListCity} from "../../components/Select/SelectListCity";


const cards = [
    {
        cardLogo: sberImg,
        cardName: "Sber card",
        color:"#12B94B",
        number:"5105 1051 0510 5100",
        currency:"RUB"
    }
];

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

export function NewCard(props) {
    const [addCard,setAddCard] = useState(false);
    const [number,setNumber] = useState('');
    const [current,setCurrent] = useState(0);
    const {showMessage} = useSiteMessage();
    const {blurWindow} = useBlur();

    useEffect(()=>{
        if(current===16) {
            showMessage(()=>(<p>
                You’ve entered invalid network currently <b>Sharks wallet</b> supports only <b>TRC-20</b>
            </p>))
        }
    },[current])

    const ListCard = ()=>{
        return (
            <>
                <Container className={'mt-3'}>
                    <TitleWithRightBlock  title={'Add card'} >
                        <BorderRadius left={4} top={2} onClick={()=>setAddCard(true)}><PlusIcon /></BorderRadius>
                    </TitleWithRightBlock>
                </Container>
                <CardList cards={cards} minVH={true}/>
            </>
        );
    }

    const CurrencyList = ()=>{
        return (
            <SelectListCity list={cities} onSave={(val)=>{console.log(val)}}/>
        );
    }

    return(
        <>
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={current===16?videoErr:video} borderRadius={true} fullScreen={false} sticky={false} MainBlockComponent={()=><Container><NextPastMenu
                showQRButton={false} nextLink={'/cardList'}
            /></Container>}>
                <Menu>
                    <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                    <Menu.Title>Enter card number</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
                <FlexColumnLayout minVH={false}>
                    <Container className={'d-flex align-items-center flex-grow-1'}>
                        <CardNumber number={number}  editable={addCard}  currentSelect={current}>
                            {current===16?<SpanBadge>Invalid card</SpanBadge>:
                                <>
                                    <img src={mcImg} alt={number}/>
                                    <Select title={'Choose currency'} onClick={()=>blurWindow(true,<CurrencyList />)}/>
                                </>
                            }

                        </CardNumber>
                    </Container>
                </FlexColumnLayout>
            </VideoBanner>
            {!addCard?
                <ListCard/>
                :
                <KeyPad
                    flexPosition={true}
                    title={'Input card number'}
                    numPad={NUMLIST_WITHOUT_DOT}
                    handleButton={(num)=>{
                        if(current<=15) {
                            setNumber(number + num.toString());
                            setCurrent(current + 1);
                        }
                    }}
                    handleDelete={()=>{
                        if(current>0) {
                            setNumber(number.substring(0,current-1));
                            setCurrent(current - 1);
                        }
                    }}
                />
            }

        </FlexColumnLayout>
            <BlurLayout />
        </>
    )
}