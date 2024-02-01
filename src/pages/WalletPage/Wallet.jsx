import React from "react";
import UseTronContext from "../../contexts/TronContext/UseTronContext";
import UseAccessContext from "../../contexts/AccessContext/UseAccessContext";
import "./Wallet.css";
export default function Wallet() {
  const { walletAddress, walletBalance, walletEnergy } = UseTronContext();
  const { logoutHandler } = UseAccessContext();
  return (
    <section className="wallet-form">
      <button onClick={logoutHandler}>logout</button>
      <div className="wallet-field">
        Address:
        <div className="wallet-address">{walletAddress}</div>
      </div>
      <div className="wallet-field">
        Balance:
        <div className="wallet-balance">{walletBalance}</div>
      </div>
      <div className="wallet-field">
        Energy:
        <div className="wallet-balance"> {walletEnergy}</div>
      </div>
      <div className="wallet-field">
        <button>send</button>
        <button>recieve</button>
      </div>
    </section>
  );
}
