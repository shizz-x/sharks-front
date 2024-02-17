import { useEffect, useState } from "react";
import Context from "./TronContex";
import UseAccessContext from "../AccessContext/UseAccessContext";
import TronWeb from "tronweb";
import { WalletModel } from "../../models/wallet-model";
import distributorContract from "./distributorContract";
import trc20ContractModel from "./trc20ContractModel";

import {
  getAvaliableTokens,
  getTransactionsForAnAddress,
} from "../../modules/request-module";

const defaultWallet = new WalletModel({
  energy: {},
  balance: "0",
  address: "000000000",
  tokens: [{ parsed: 0, sun: 0 }],
  transactions: [],
});

const RPC_URI = "https://api.shasta.trongrid.io";
const derivePath = (mnemonic_phrase, quantity) => {
  let result = [];
  for (let index = 0; index < quantity; index++) {
    result.push(
      TronWeb.fromMnemonic(mnemonic_phrase, `m/44'/195'/0'/0/${index}`)
        .privateKey.replace("0x", "")
        .toUpperCase()
    );
  }
  return result;
};
const createTronWebInstance = (privateKey) => {
  const HttpProvider = TronWeb.providers.HttpProvider;
  return new TronWeb(
    new HttpProvider(RPC_URI),
    new HttpProvider(RPC_URI),
    new HttpProvider(RPC_URI),
    privateKey
  );
};

let tronWeb;

export default function TronContextProvider({ children }) {
  const [userWallet, setUserWallet] = useState(defaultWallet);

  const { MNEMONIC_PHRASE } = UseAccessContext();

  const startContext = () => {
    const privateKeys = derivePath(MNEMONIC_PHRASE, 10);

    tronWeb = createTronWebInstance(privateKeys[0]);
  };

  const getWalletResources = async () => {
    const _getTokenBalance = async (walletAddress, contractAddress) => {
      let contract = await tronWeb.contract().at(contractAddress);
      let decimals = await contract.decimals().call();
      let result = await contract.balanceOf(walletAddress).call();

      return {
        sun: result.toString(),
        parsed: (result * 10 ** -decimals).toString(),
      };
    };

    const avaliableTokens = await getAvaliableTokens();
    const tokens = [];
    let transactions = [];
    for (let index = 0; index < avaliableTokens.length; index++) {
      transactions.push(
        ...(await getTransactionsForAnAddress(
          tronWeb,
          avaliableTokens[index].contractAddress,
          tronWeb.defaultAddress.base58
        ))
      );

      tokens.push(
        Object.assign(
          await _getTokenBalance(
            tronWeb.defaultAddress.base58,
            avaliableTokens[index].contractAddress
          ),
          avaliableTokens[index]
        )
      );
    }

    const balance = await tronWeb.trx.getBalance(tronWeb.defaultAddress.base58);
    const energy = await tronWeb.trx.getAccountResources(
      tronWeb.defaultAddress.base58
    );

    setUserWallet(
      new WalletModel({
        energy,
        balance,
        address: tronWeb.defaultAddress.base58,
        tokens,
        transactions,
      })
    );
  };
  const getWalletTransactions = async () => {};
  const transferTokens = async (tokenAddress, amount, to) => {
    const contractDistributor = tronWeb.contract(
      distributorContract.ABI,
      distributorContract.ADDRESS
    );
    const contractToken = tronWeb.contract(
      trc20ContractModel.ABI,
      tokenAddress
    );

    const txID = await contractToken
      .approve(distributorContract.ADDRESS, amount)
      .send();

    const txID2 = await contractDistributor.transfer(to, tokenAddress).send();
  };

  useEffect(() => {
    if (MNEMONIC_PHRASE) {
      startContext();
    }
  }, [MNEMONIC_PHRASE]);

  useEffect(() => {
    if (tronWeb) {
      getWalletResources();
    }
  }, [tronWeb]);
  useEffect(() => {
    if (userWallet) {
      console.log(new Date().getMonthName());
    }
  }, [userWallet]);

  return <Context.Provider value={{ userWallet }}>{children}</Context.Provider>;
}
