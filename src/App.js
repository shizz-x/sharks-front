import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Wallet from "./pages/Wallet/Wallet";
import React, {Component} from "react";
import AccessContextProvider from "./contexts/AccessContext/AccessContextProvider";
import TronContextProvider from "./contexts/TronContext/TronContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/IndexPage/Index";
import {ThemeContext, ThemeValue} from "./components/ThemeContext/ThemeContext";
import Create from "./pages/IndexPage/Create";
import Shuffle from "./pages/IndexPage/Shuffle";
import {SecurityPasswordContext} from "./components/SecurityPassword/SecurityPasswordContext";
import {MainLayout} from "./components/Layouts/MainLayout";
import {Send} from "./pages/Send/Send";
import {SiteMessageContext} from "./components/SiteMessage/SiteMessageContext";
import {Amount} from "./pages/Send/Amount";
import {Summary} from "./pages/Send/Summary";
import {Status} from "./pages/Send/Status";
import {Receive} from "./pages/Receive/Receive";
import {Share} from "./pages/Receive/Share";
import {Card} from "./pages/Card/Card";
import {NewCard} from "./pages/Card/NewCard";
import {CardListPage} from "./pages/Card/CardListPage";
import {BlurContext} from "./components/Layouts/BlurContext";
import {BlurLayout} from "./components/Layouts/BlurLayout";
import {Order} from "./pages/Card/Order";
import {OrderConfirm} from "./pages/Card/OrderConfirm";
import {OrderStatus} from "./pages/Card/OrderStatus";
import {Cash} from "./pages/Cash/Cash";
import {CashAmount} from "./pages/Cash/CashAmount";
import {CashConfirm} from "./pages/Cash/CashConfirm";
import {CashStatus} from "./pages/Cash/CashStatus";


export default class App extends Component {
    render() {

        return (
            <BrowserRouter>
                <AccessContextProvider>
                    <TronContextProvider>
                        <ThemeContext theme={ThemeValue.dark}>
                            <MainLayout>
                                <BlurContext>
                                <SiteMessageContext>
                                    <SecurityPasswordContext>
                                        <BlurLayout>
                                        <Routes>
                                            <Route index path="/login" element={<Index></Index>}></Route>
                                            <Route path="/createWallet" element={<Create></Create>}></Route>
                                            <Route path="/send" element={<Send></Send>}></Route>
                                            <Route path="/amount" element={<Amount></Amount>}></Route>
                                            <Route path="/summary" element={<Summary></Summary>}></Route>
                                            <Route path="/receive" element={<Receive></Receive>}></Route>
                                            <Route path="/share" element={<Share></Share>}></Route>
                                            <Route path="/status" element={<Status></Status>}></Route>
                                            <Route path="/shuffleWallet" element={<Shuffle></Shuffle>}></Route>
                                            <Route path="/wallet" element={<Wallet></Wallet>}></Route>
                                            <Route path="/card" element={<Card></Card>}></Route>
                                            <Route path="/newCard" element={<NewCard></NewCard>}></Route>
                                            <Route path="/cardList" element={<CardListPage></CardListPage>}></Route>
                                            <Route path="/orderConfirm" element={<OrderConfirm></OrderConfirm>}></Route>
                                            <Route path="/orderStatus" element={<OrderStatus></OrderStatus>}></Route>
                                            <Route path="/cash" element={<Cash></Cash>}></Route>
                                            <Route path="/cashAmount" element={<CashAmount></CashAmount>}></Route>
                                            <Route path="/cashConfirm" element={<CashConfirm></CashConfirm>}></Route>
                                            <Route path="/cashStatus" element={<CashStatus></CashStatus>}></Route>
                                            <Route path="/newOrder" element={<Order></Order>}></Route>
                                            <Route path="/login2" element={<Login></Login>}></Route>
                                            <Route path="/register" element={<Register></Register>}></Route>
                                        </Routes>
                                        </BlurLayout>
                                    </SecurityPasswordContext>
                                </SiteMessageContext>
                                </BlurContext>
                            </MainLayout>
                        </ThemeContext>
                    </TronContextProvider>
                </AccessContextProvider>
            </BrowserRouter>
        );
    }
}
