import {FlexColumnLayout} from "../../components/Layouts/FlexColumnLayout";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/wiolet_background.mp4";
import {Container} from "react-bootstrap";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import React, {useState} from "react";
import {DropDownMenu} from "../../components/NextPastMenu/DropDownMenu";
import {ButtonGroup} from "../../components/ButtonGroup/ButtonGroup";
import {SelectListCity} from "../../components/Select/SelectListCity";
import {useBlur} from "../../components/Layouts/BlurContext";
import thai from "../../tmp/thailand.png"
import turk from "../../tmp/turkey.png"
import {CityList} from "../../components/CityList/CityList";
import {CityBadge} from "../../components/CityBadge/CityBadge";
import {useSiteMessage} from "../../components/SiteMessage/SiteMessageContext";


const radios = [
    { name: 'Office', value: '1' },
    { name: 'Courier', value: '2' },
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

const searchList = [
    {
        city:'Bangkok',
        country:'Thailand',
        info:'9 AM - 10 PM',
        flag:thai
    },
    {
        city:'City Name',
        country:'Thailand',
        info:'9 AM - 10 PM',
        flag:thai
    },
    {
        city:'Istanbul',
        country:'Turkey',
        info:'24 Hours мах $13K',
        flag:turk
    },
    {
        city:'Antalia',
        country:'Turkey',
        info:'9 AM - 10 PM',
        flag:turk
    },
];

export function Cash(props) {
    const {blurWindow} = useBlur();
    const {showMessage} = useSiteMessage();
    const [selectCity,setSelectCity] = useState(searchList[3]);
    const CurrencyList = ()=>{
        return (
            <SelectListCity list={cities} onSave={(val)=>{console.log(val)}}/>
        );
    }

    const curierHandler = (select)=>{
        console.log(select);
        showMessage(()=><p>There is no courier in this city at the moment. We working hard on providing better service.</p>);
    }

    return( <FlexColumnLayout minVH={true}>
        <VideoBanner video={video} borderRadius={true} fullScreen={false} sticky={false} MainBlockComponent={()=><Container>
            <DropDownMenu
                nextLink={'/cashAmount'}
                dropTitle={'1 USDT = 0.33 TRY'}
                dropHandler={()=>blurWindow(true,<CurrencyList />)}
            />
        </Container>}>
            <Menu>
                <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                <Menu.Title>Withdraw in cash</Menu.Title>
                <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
            </Menu>
            <FlexColumnLayout minVH={false}>
                <Container className={'d-grid align-items-center flex-grow-1'}>
                    <CityBadge
                        city={selectCity.city}
                        flag={selectCity.flag}
                        info={'After requesting withdrawal, a courier arranges delivery to your location.'}
                        component={
                            <div className={'d-flex justify-content-center mb-4'}>
                                <ButtonGroup
                                    color={'#af4ed5'}
                                    radios={radios}
                                    onChoise={(select)=>curierHandler(select)}
                                />
                            </div>
                        }
                    />

                </Container>

            </FlexColumnLayout>
        </VideoBanner>
        <div className={'mt-3'}>
            <CityList cities={searchList} onClick={(sel)=>setSelectCity(sel)} select={selectCity} />
        </div>
    </FlexColumnLayout>);
}