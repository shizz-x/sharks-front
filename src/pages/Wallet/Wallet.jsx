import {MainLayout} from "../../components/Layouts/MainLayout";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/bg.mp4";
import React, {useEffect, useState} from "react";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {Balance} from "../../components/Balance/Balance";
import {WalletMenu} from "../../components/WalletMenu/WalletMenu";
import {TransactionsList} from "../../components/Transactions/TransactionsList";
import {useSecurityPassword} from "../../components/SecurityPassword/SecurityPasswordContext";
import {Button} from "../../components/Button/Button";


const transactions = [
    {
        operationType: 1,
        operationDate: null,
        operationStatus:'Delivery',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 142.54,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: null,
        operationStatus:'Failed',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: '1:12 AM today',
        operationStatus:'Completed',
        operationTitle:'Rejected',
        operationBalance:{
            balance: 532,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: null,
        operationStatus:'Failed',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 4,
        operationDate: '21 February',
        operationStatus:'Completed',
        operationTitle:'Received',
        operationBalance:{
            balance: 52,
            currency:'USDT'
        }
    },
    {
        operationType: 3,
        operationDate: '1:12 AM today',
        operationStatus:'Completed',
        operationTitle:'Sent',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 1,
        operationDate: null,
        operationStatus:'Delivery',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 142.54,
            currency:'USDT'
        }
    },
    {
        operationType: 3,
        operationDate: '1:12 AM today',
        operationStatus:'Completed',
        operationTitle:'Sent',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 1,
        operationDate: null,
        operationStatus:'Delivery',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 142.54,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: null,
        operationStatus:'Failed',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 4,
        operationDate: '21 February',
        operationStatus:'Completed',
        operationTitle:'Received',
        operationBalance:{
            balance: 52,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: null,
        operationStatus:'Failed',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: null,
        operationStatus:'Failed',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 4,
        operationDate: '21 February',
        operationStatus:'Completed',
        operationTitle:'Received',
        operationBalance:{
            balance: 52,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: null,
        operationStatus:'Failed',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: '1:12 AM today',
        operationStatus:'Completed',
        operationTitle:'Rejected',
        operationBalance:{
            balance: 532,
            currency:'USDT'
        }
    },
    {
        operationType: 2,
        operationDate: null,
        operationStatus:'Failed',
        operationTitle:'Withdraw',
        operationBalance:{
            balance: 3456,
            currency:'USDT'
        }
    },
]

export default function Wallet(props) {
    const {showPasswordWindow,setCheckHandler} = useSecurityPassword();


    /********* Установка и проверка пина ********************/
    const [firstCode,setFirstCode]= useState('');


    //Устанавливаем пин
    const pinCodeHandlerFirst = (pin)=>{
        console.log(pin);
        const password = pin.join('');
        setFirstCode(password);
        return true;
    }

    // проверяем что установленный пин корректный
    const pinCodeHandlerSecond = (pin)=>{
        console.log(pin);
        const pass= pin.join('');
        return firstCode === pass;
    }

    //Очищаем значения сохраненного пина и вызываем окно
    const startSetPinHandler =()=>{
        setFirstCode('');
        showPasswordWindow('Set security password','Incorrect security password');

    }

    //Тут проверяем появился ли пин, если да, то вызываем окно с другими заголовками и в качестве проверки используем второй хендлер
    useEffect(()=>{
        if(firstCode!=='') {
            setCheckHandler(pinCodeHandlerSecond);
            showPasswordWindow('Repeat security password', 'Incorrect security password');
        } else {
            setCheckHandler(pinCodeHandlerFirst);
        }
    },[firstCode])

    /** ------------------------------------------------------------------   */

    return (
        <>
            <VideoBanner video={video} borderRadius={true} sticky={true}>
                <Menu>
                    <Menu.Left><Link to={-1}><SettingIcon /></Link></Menu.Left>
                    <Menu.Title>Hello, Leo</Menu.Title>
                    <Menu.Right><Link to={"#"}><ChatIcon/></Link></Menu.Right>
                </Menu>

                <Balance balance={13242.34} currency={'USDT'} currencySymbol={'$'} />

                <Container>
                    <WalletMenu />
                </Container>
            </VideoBanner>
            <Container className={'pt-10'}>
                <Button onClick={startSetPinHandler}>
                    Показать окно пароля
                </Button>
                <TransactionsList transactions={transactions} />
            </Container>
        </>
    )
}