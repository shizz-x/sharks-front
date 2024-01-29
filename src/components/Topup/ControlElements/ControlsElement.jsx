import React, { useEffect, useState } from "react";
import usdtSvg from "../../../media/tether-usdt-logo.svg";
import rubbleSvg from "../../../media/ruble-sign-svgrepo-com.svg";
import downArrow from "../../../media/down-arrow-svgrepo-com.svg";
export default function ControlsElement({
  chooserOpenedHandler,
  chooserOpened,
  payAmountHandler,
  calculatedValueInUsd,
  backendData,
  payoutAmount,
  payoutAmountHandler,
  selectedPayAmount,
  payAmount,
  COIN_LOGOS,
}) {
  const [selectedPayAmountLogo, setSelectedPayAmountLogo] = useState("");

  useEffect(() => {
    setSelectedPayAmountLogo(COIN_LOGOS[selectedPayAmount.ticker]);
  }, [selectedPayAmount]);

  return (
    <>
      <div
        className={`form-controls-wrapper ${
          chooserOpened ? "transparent" : ""
        }`}
      >
        <input
          type="tel"
          name="tel"
          id="TEL"
          required
          maxlength="10"
          pattern="\b[0-9]+"
          placeholder="999 999-99-99"
          autocomplete="off"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
          alt="telephone"
        />
      </div>
      <div
        className={`form-controls-wrapper inputs ${
          chooserOpened ? "transparent" : ""
        }`}
      >
        <div className="inputs">
          <p>You pay</p>
          <input
            name="pay"
            placeholder="0"
            onChange={payAmountHandler}
            value={payAmount}
            required
            type="number"
            id="PAY"
          />
          <p className="YOU-PAY">
            {calculatedValueInUsd ? `${calculatedValueInUsd}$` : "0$"}
          </p>
        </div>
        <div className="dropdowns">
          <p className="hidden">USDT = 1$</p>

          <div className="pay-select" onClick={() => chooserOpenedHandler(1)}>
            <img
              id="PAY-SELECT-LOGO"
              src={selectedPayAmountLogo}
              alt=""
              srcset=""
            />
            <div>{selectedPayAmount.ticker}</div>
            <img src={downArrow} className="down-arrow" />
          </div>

          <p id="PAY-SELECT-CURRENCY">
            {selectedPayAmount.ticker} = {selectedPayAmount.usd}$
          </p>
        </div>
      </div>
      <div
        className={`form-controls-wrapper inputs ${
          chooserOpened ? "transparent" : ""
        }`}
      >
        <div className="inputs">
          <p>Top up</p>
          <input
            name="pay"
            min="0"
            disabled
            onChange={payoutAmountHandler}
            type="number"
            placeholder="0"
            id="PAYOUT"
            value={payoutAmount}
          />
          <p className="YOU-PAY">
            {calculatedValueInUsd ? `${calculatedValueInUsd}$` : "0$"}
          </p>
        </div>
        <div className="dropdowns">
          <p className="hidden">USDT = 1$</p>

          <div className="pay-select">
            <img src={rubbleSvg} alt="" srcset="" />
            <select name="pay-select" id="PAY-SELECT">
              <option value="rubble">RUB</option>
            </select>
            <img src={downArrow} className="down-arrow" />
          </div>

          <p id="PAY-OUT-RUBBLE">1 Rub = $0.01</p>
        </div>
      </div>
      <button
        type="button"
        className={`topup-button ${chooserOpened ? "transparent" : ""}`}
      >
        Top Up
      </button>
    </>
  );
}
