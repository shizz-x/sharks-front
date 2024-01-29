import React, { useEffect, useState } from "react";
import "./CurrencyChooser.css";
import CloseButton from "../../Utility/CloseButton/CloseButton";
import TopTokens from "./TopTokens/TopTokens";
import TokensScroller from "./TokensScroller/TokensScroller";
export default function CurrencyChooser({
  chooserOpened,
  chooserOpenedHandler,
  backendData,
  setSelectedPayAmount,
  COIN_LOGOS,
}) {
  const [currentTokens, setCurrentTokens] = useState([]);
  useEffect(() => {
    if (backendData !== undefined) {
      setCurrentTokens(Object.values(backendData));
    }
  }, [backendData]);

  return (
    <div className={`currency_chooser_wrapper ${chooserOpened ? "shown" : ""}`}>
      <div className="selectors">
        <div className="header">
          <span>Choose token</span>
          <CloseButton onClick={[chooserOpenedHandler, 1]}></CloseButton>
        </div>
        <div className="input_wrapper">
          <input type="text" placeholder="Name or address" />
        </div>
        <TopTokens
          chooserOpenedHandler={chooserOpenedHandler}
          COIN_LOGOS={COIN_LOGOS}
          setSelectedPayAmount={setSelectedPayAmount}
          tokens={currentTokens}
        ></TopTokens>
      </div>
      <TokensScroller
        chooserOpenedHandler={chooserOpenedHandler}
        COIN_LOGOS={COIN_LOGOS}
        setSelectedPayAmount={setSelectedPayAmount}
        tokens={currentTokens}
      ></TokensScroller>
    </div>
  );
}
