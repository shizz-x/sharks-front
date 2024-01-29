import "./css/normilize.css";
import "./css/index.css";
import Description from "./components/Description/Description";
import Header from "./components/Header/Header";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/RegisterPage/Register";
import React, { Component } from "react";
import AccessContextProvider from "./contexts/AccessContextProvider";

import { HashRouter, Routes, Route } from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <HashRouter>
        <AccessContextProvider>
          <Header></Header>
          <main>
            <div className="content">
              <div className="blured_bg"></div>
              <div className="spliter">
                <Description></Description>
                <Routes>
                  <Route index path="/" element={<></>}></Route>
                  <Route path="/login" element={<Login></Login>}></Route>
                  <Route
                    path="/register"
                    element={<Register></Register>}
                  ></Route>
                  <Route path="/wallet" element={<></>}></Route>
                </Routes>
              </div>
            </div>
          </main>
        </AccessContextProvider>
      </HashRouter>
    );
  }
}
