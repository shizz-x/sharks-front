import React, { useEffect, useState } from "react";
import "./TopTokens.css";

export default function TopTokens({
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
              className="top_token"
              onClick={() => {
                setSelectedPayAmount(token);
                chooserOpenedHandler(1);
              }}
            >
              <img src={COIN_LOGOS[token.ticker]} alt={token.name} />
              <span>{token.name}</span>
            </div>
          );
        }
      });
      setVisibleTokens(result);
    };
    prepare();
  }, [tokens]);

  return <div className="top_tokens_wrapper">{visibleTokens}</div>;
}
