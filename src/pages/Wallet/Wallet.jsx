import {MainLayout} from "../../components/Layouts/MainLayout";
import {VideoBanner} from "../../components/VideoBanner/VideoBanner";
import video from "../../media/bg.mp4";
import React, {useState} from "react";
import {Menu} from "../../components/Menu/Menu";
import {Link} from "react-router-dom";
import {ChatIcon} from "../../components/Icon/Chat/ChatIcon";
import {Container} from "react-bootstrap";
import {SettingIcon} from "../../components/Icon/Setting/SettingIcon";
import {Balance} from "../../components/Balance/Balance";
import {WalletMenu} from "../../components/WalletMenu/WalletMenu";
import {TransactionsList} from "../../components/Transactions/TransactionsList";


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

    return (
        <MainLayout>
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
                <TransactionsList transactions={transactions} />
            </Container>
        </MainLayout>
    )
}