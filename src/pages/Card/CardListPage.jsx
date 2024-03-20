import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import green from "../../media/green_bg.mp4";
import blue from "../../media/blue_bg.mp4";
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
import React, {useState} from "react";
import {PlusIcon} from "../../components/Icon/Plus/PlusIcon";
import sberImg from "../../tmp/sber.png"
import mcImg from "../../tmp/mc.png"
import {CardList} from "../../components/CardList/CardList";
import {SpanBadge} from "../../components/SpanBadge/SpanBadge";
import {NextBackMenu} from "../../components/NextPastMenu/NextBackMenu";


const cards = [
    {
        cardLogo: sberImg,
        cardName: "Sber card",
        color:"#12B94B",
        number:"5105 1051 0510 5100",
        currency:"RUB"
    },
    {
        cardLogo: mcImg,
        cardName: "City",
        color:"#4E7BF0",
        number:"5433 4213 4432 5256",
        currency:"RUB"
    }
];

export function CardListPage(props) {
    const [bg,setBg] = useState(green);
    const [select,setSelect] = useState(false);
    const [card,setCard] = useState(cards[0].number);


    return(
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={bg} borderRadius={true} fullScreen={false} sticky={false} MainBlockComponent={()=><Container><NextBackMenu
                nextLink={'/newOrder'} backLink={-1}
            /></Container>}>
                <Menu>
                    <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                    <Menu.Title>Enter card number</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
                <FlexColumnLayout minVH={false}>
                    <Container className={'d-flex align-items-center flex-grow-1'}>
                        <CardNumber number={card.number} editable={!select}>
                            <img src={card.cardLogo} alt={card.cardName} /> <SpanBadge>{card.currency}</SpanBadge>
                        </CardNumber>
                    </Container>
                </FlexColumnLayout>
            </VideoBanner>
            <Container className={'mt-3'}>
                <TitleWithRightBlock  title={'Add card'} >
                    <BorderRadius left={4} top={2}><PlusIcon /></BorderRadius>
                </TitleWithRightBlock>
            </Container>
            <CardList cards={cards} minVH={true} selectable={true} onClick={(obj)=>{
                setSelect(true);
                setCard(obj);
                if(obj.cardName === 'City') {
                    setBg(blue);
                } else {
                    setBg(green)
                }
            }}/>

        </FlexColumnLayout>
    )
}