import React, { useState } from "react";
import UseTronContext from "../../contexts/TronContext/UseTronContext";
import UseAccessContext from "../../contexts/AccessContext/UseAccessContext";
import Trc20Tokens from "./Trc20Tokens/Trc20Tokens";
import "./Wallet.css";
import { toast } from "react-toastify";
export default function Wallet() {
  const {
    walletAddress,
    walletBalance,
    walletEnergy,
    transferTokens,
    tronWeb,
  } = UseTronContext();
  const { logoutHandler } = UseAccessContext();

  const [walletToSend, setWalletToSend] = useState("");
  const [amountToSend, setAmountToSend] = useState("");
  const walletToSendHandler = (e) => {
    setWalletToSend(e.target.value);
  };
  const amountToSendHandler = (e) => {
    setAmountToSend(e.target.value);
  };

  const transferHandler = async (c, a, t) => {
    if (a < 1.5) {
      toast.error("1,5$ required");
      return;
    }
    if (!tronWeb.isAddress(t)) {
      toast.error(`${t} is not address`);
      return;
    }
    toast.promise(transferTokens(c, tronWeb.toSun(a), t), {
      success: "Transaction broadcasted",
      pending: "broadcasting...",
      error: "unhandled error",
    });
  };

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

      <Trc20Tokens></Trc20Tokens>

      <div className="wallet-field">
        <input
          type="number"
          value={amountToSend}
          onChange={amountToSendHandler}
          placeholder="Amount"
        />
      </div>
      <div className="wallet-field">
        <input
          type="text"
          value={walletToSend}
          onChange={walletToSendHandler}
          placeholder="Reciever"
        />
      </div>
      <div className="wallet-field">
        <button
          onClick={() =>
            transferHandler(
              "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
              amountToSend,
              walletToSend
            )
          }
        >
          send
        </button>
      </div>
    </section>
  );
}
