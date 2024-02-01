import React, { useEffect, useState } from "react";
import UseTronContext from "../../../contexts/TronContext/UseTronContext";
export default function Trc20Tokens() {
  const { fromSun, toSun, walletTokens } = UseTronContext();
  const [visibleTokens, setVisibleTokens] = useState([]);

  useEffect(() => {
    const result = [];

    walletTokens.forEach((token, i) => {
      result.push(
        <div key={i} className="wallet-field">
          <img width={"20px"} src={token.logo} alt={token.name} />
          {token.ticker}:{token.avaliableFloat}
        </div>
      );
    });

    setVisibleTokens(result);
  }, [walletTokens]);

  if (!walletTokens) {
    return <div className="wallet-field">No avaliable tokens</div>;
  } else {
    return <div className="wallet-field">{visibleTokens}</div>;
  }
}
