import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Wallet from "./pages/Wallet/Wallet";
import React, {Component, useContext} from "react";
import AccessContextProvider from "./contexts/AccessContext/AccessContextProvider";
import TronContextProvider from "./contexts/TronContext/TronContextProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/IndexPage/Index";
import {ThemeContext, ThemeValue} from "./components/ThemeContext/ThemeContext";
import Create from "./pages/IndexPage/Create";
import Shuffle from "./pages/IndexPage/Shuffle";

export default class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <AccessContextProvider>
          <TronContextProvider>
              <ThemeContext theme={ThemeValue.dark}>
                  <Routes>
                    <Route index path="/login" element={<Index></Index>}></Route>
                    <Route path="/createWallet" element={<Create></Create>}></Route>
                    <Route path="/shuffleWallet" element={<Shuffle></Shuffle>}></Route>
                      <Route path="/wallet" element={<Wallet></Wallet>}></Route>
                    <Route path="/login2" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                  </Routes>
              </ThemeContext>
          </TronContextProvider>
        </AccessContextProvider>
      </BrowserRouter>
    );
  }
}
