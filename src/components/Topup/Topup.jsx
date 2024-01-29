import React, { useEffect, useState } from "react";

import CurrencyChooser from "./CurrencyChooser/CurrencyChooser";
import ControlsElement from "./ControlElements/ControlsElement";
import "./Topup.css";
import Loader from "./Loader/Loader";
import bnbSvg from "../../media/bnb-bnb-logo.png";
import btcSvg from "../../media/bitcoin-btc-logo.png";
import ethSvg from "../../media/ethereum-eth-logo.png";
import usdtSvg from "../../media/tether-usdt-logo.svg";
import zecSvg from "../../media/zec.svg";
import xmrSvg from "../../media/xmr.svg";

const images = {
  BNB: bnbSvg,
  BTC: btcSvg,
  ETH: ethSvg,
  USDT: usdtSvg,
  ZEC: zecSvg,
  XMR: xmrSvg,
};
export default function Topup() {
  const [COIN_LOGOS, SETCOINLOGOS] = useState(images);
  const [chooserOpened, setChooserOpened] = useState(false);
  const [payAmount, setPayAmount] = useState(0);
  const [payoutAmount, setPayoutAmount] = useState(0);
  const [calculatedValueInUsd, setCalculatedValueInUsd] = useState(0);
  const [backendData, setBackendData] = useState(undefined);

  const [disableControls, setDisableControls] = useState(true);

  const [selectedPayAmount, setSelectedPayAmount] = useState(new Object());
  const [selectedPayoutAmount, setSelectedPayoutAmount] = useState(
    new Object()
  );

  const [firstLoad, setFirstLoad] = useState(false);

  const chooserOpenedHandler = (state) => {
    setChooserOpened(!chooserOpened);
  };
  const payAmountHandler = (e) => {
    setPayAmount(e.target.value);
  };
  const payoutAmountHandler = (e) => {
    setPayAmount(
      (e.target.value / backendData.usd.rub) * selectedPayAmount.usd
    );
    setPayoutAmount(e.target.value);
  };

  useEffect(() => {
    const getDataFromBackend = async () => {
      setDisableControls(true);
      // const currencyfetched = await fetch("https://sharks.tel/api/currency", {
      //   mode: "no-cors",
      // });

      // let data = await currencyfetched.json();

      const data = {
        bnb: {
          usd: 332.86,
          name: "Binance Coin",
          ticker: "BNB",
        },
        btc: {
          usd: 42814,
          name: "Bitcoin",
          ticker: "BTC",
        },
        eth: {
          usd: 2382.51,
          name: "Ethereum",
          ticker: "ETH",
        },
        xmr: {
          usd: 173.79,
          name: "Monero",
          ticker: "XMR",
        },
        usdt: {
          usd: 1,
          name: "Tether USD",
          ticker: "USDT",
        },
        zec: {
          usd: 32.34,
          name: "Zcash",
          ticker: "ZEC",
        },
        usd: {
          rub: 92.12,
          usd: 1,
          name: "United States Dollar",
          ticker: "USD",
        },
        rub: {
          usd: 0.1085540599,
          rub: 1,
          name: "Russian Rubble",
          ticker: "RUB",
        },
      };

      setBackendData(data);
      setDisableControls(false);
    };
    getDataFromBackend().then(() => setFirstLoad(true));

    const fetchInterval = setInterval(async () => {
      getDataFromBackend();
    }, 5000);
  }, []);

  useEffect(() => {
    setPayAmount(0);
  }, [selectedPayAmount, selectedPayoutAmount]);

  useEffect(() => {
    if (firstLoad) {
      setSelectedPayAmount(backendData.usdt);
      setFirstLoad(false);
    }
  }, [firstLoad]);

  useEffect(() => {
    if (backendData !== undefined) {
    }
  }, [backendData]);

  useEffect(() => {
    if (backendData !== undefined) {
      setCalculatedValueInUsd(
        (payAmount * selectedPayAmount.usd).toString().slice(0, 10)
      );
      setPayoutAmount(payAmount * selectedPayAmount.usd * backendData.usd.rub);
    }
  }, [payAmount]);

  return (
    <section className="topup-form">
      <form>
        <Loader disableControls={disableControls}></Loader>
        <CurrencyChooser
          COIN_LOGOS={COIN_LOGOS}
          backendData={backendData}
          chooserOpened={chooserOpened}
          chooserOpenedHandler={chooserOpenedHandler}
          setSelectedPayAmount={setSelectedPayAmount}
        ></CurrencyChooser>

        <ControlsElement
          COIN_LOGOS={COIN_LOGOS}
          calculatedValueInUsd={calculatedValueInUsd}
          payAmount={payAmount}
          payoutAmountHandler={payoutAmountHandler}
          payoutAmount={payoutAmount}
          selectedPayAmount={selectedPayAmount}
          backendData={backendData}
          payAmountHandler={payAmountHandler}
          chooserOpened={chooserOpened}
          chooserOpenedHandler={chooserOpenedHandler}
        ></ControlsElement>
      </form>
    </section>
  );
}
