import React, { useState, useEffect } from "react";
import "./TokensScroller.css";
export default function TokensScroller({
  tokens,
  setSelectedPayAmount,
  COIN_LOGOS,
  chooserOpenedHandler,
}) {
  const [visibleTokens, setVisibleTokens] = useState([undefined]);

  useEffect(() => {
    const prepare = () => {
      let result = [];
      tokens.forEach((token) => {
        if (token.ticker != "RUB" && token.ticker != "USD") {
          result.push(
            <div
              className="scroller_token"
              onClick={() => {
                setSelectedPayAmount(token);
                chooserOpenedHandler(1);
              }}
            >
              <div className="name_n_logo">
                <img src={COIN_LOGOS[token.ticker]} alt={token.name} />
                <div>
                  <p className="token_name">{token.name}</p>
                  <span className="token_ticker">{token.ticker}</span>
                </div>
              </div>
              <div className="price">{token.usd} USD</div>
            </div>
          );
        }
      });
      setVisibleTokens(result);
    };
    prepare();
  }, [tokens]);
  return <div className="scroller">{visibleTokens}</div>;
}
