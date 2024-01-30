import "./css/normilize.css";
import "./css/index.css";
import Header from "./components/Header/Header";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import Wallet from "./pages/WalletPage/Wallet";
import React, { Component } from "react";
import AccessContextProvider from "./contexts/AccessContext/AccessContextProvider";
import TronContextProvider from "./contexts/TronContext/TronContextProvider";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MaInBoard from "./components/MainBoard/MaInBoard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AccessContextProvider>
          <TronContextProvider>
            <Header></Header>
            <MaInBoard>
              <Routes>
                <Route index path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/wallet" element={<Wallet></Wallet>}></Route>
              </Routes>
            </MaInBoard>
          </TronContextProvider>
        </AccessContextProvider>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ fontSize: "12px" }}
          theme="light"
          transition={Zoom}
        />
      </BrowserRouter>
    );
  }
}
