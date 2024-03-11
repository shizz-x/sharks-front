import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/bg.mp4";
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
import {CardList} from "../../components/CardList/CardList";
import {KeyPad, NUMLIST_WITH_DOT, NUMLIST_WITHOUT_DOT} from "../../components/KeyPad/KeyPad";
import {FormatNumberInput} from "../../components/Helpers/FormatNumberInput";

const cards = [
    {
        cardLogo: sberImg,
        cardName: "Sber card",
        color:"#12B94B",
        number:"5105 1051 0510 5100",
        currency:"RUB"
    }
];

export function NewCard(props) {
    const [addCard,setAddCard] = useState(false);
    const [number,setNumber] = useState('');
    const [current,setCurrent] = useState(0);
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

    return(
        <FlexColumnLayout minVH={true}>
            <VideoBanner video={video} borderRadius={true} fullScreen={false} sticky={false} MainBlockComponent={()=><Container><NextPastMenu
                showQRButton={false} nextLink={'/cardList'}
            /></Container>}>
                <Menu>
                    <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                    <Menu.Title>Enter card number</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>
                <FlexColumnLayout minVH={false}>
                    <Container className={'d-flex align-items-center flex-grow-1'}>
                        <CardNumber number={number}  editable={addCard}  currentSelect={current}/>
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
    )
}