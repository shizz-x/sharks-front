import { useEffect, useState } from "react";
import Context from "./TronContex";
import UseAccessContext from "../AccessContext/UseAccessContext";
import TronWeb from "tronweb";
import { WalletModel } from "../../models/wallet-model";
// import distributorContract from "./distributorContract";
// import trc20ContractModel from "./trc20ContractModel";

import {
  getAvaliableTokens,
  getTransactionsForAnAddress,
} from "../../modules/request-module";

const defaultWallet = new WalletModel({
  energy: {},
  balance: "0",
  address: "0",
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

let tronWeb = undefined;

export default function TronContextProvider({ children }) {
  const [userWallet, setUserWallet] = useState(defaultWallet);

  const { MNEMONIC_PHRASE } = UseAccessContext();

  const startContext = () => {
    const privateKeys = derivePath(MNEMONIC_PHRASE, 10);

    tronWeb = createTronWebInstance(privateKeys[0]);

    if (tronWeb) {
      getWalletResources();
    }
  };

  const getWalletResources = async () => {
    const _getTokenBalance = async (walletAddress, contractAddress) => {
      const contract = await tronWeb.contract().at(contractAddress);
      const decimals = await contract.decimals().call();
      const balance = await contract.balanceOf(walletAddress).call();

      return {
        sun: balance.toString(),
        parsed: (balance * 10 ** -decimals).toString(),
      };
    };

    const avaliableTokens = await getAvaliableTokens();

    const { balance, energy } = await Promise.allSettled([
      tronWeb.trx.getBalance(tronWeb.defaultAddress.base58),
      tronWeb.trx.getAccountResources(tronWeb.defaultAddress.base58),
    ]);

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

  const getRecentTransactions = async () => {
    let transactions = [];
    for (let index = 0; index < userWallet.tokens.length; index++) {
      transactions.push(
        ...(await getTransactionsForAnAddress(
          tronWeb,
          userWallet.tokens[index].contractAddress,
          tronWeb.defaultAddress.base58
        ))
      );
    }
    return transactions;
  };
  // const transferTokens = async (tokenAddress, amount, to) => {
  //   const contractDistributor = tronWeb.contract(
  //     distributorContract.ABI,
  //     distributorContract.ADDRESS
  //   );
  //   const contractToken = tronWeb.contract(
  //     trc20ContractModel.ABI,
  //     tokenAddress
  //   );

  //   const txID = await contractToken
  //     .approve(distributorContract.ADDRESS, amount)
  //     .send();

  //   const txID2 = await contractDistributor.transfer(to, tokenAddress).send();
  // };

  useEffect(() => {
    if (MNEMONIC_PHRASE) {
      startContext();
    }
  }, [MNEMONIC_PHRASE]);

  useEffect(() => {
    if (userWallet.address !== "0") {
      (async () => {
        const trc20ContractAddress = "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs";
        let contract = await tronWeb.contract().at(trc20ContractAddress);
        //Use watch to listen for events emitted by a smart contract method. You can define functions to be executed when certain events are caught.
        //contract.eventname.watch(callback)
        (await contract) &&
          contract.Transfer().watch((err, event) => {
            if (err) return console.error('Error with "Message" event:', err);

            console.group("New event received");
            console.log("- Contract Address:", event.contract);
            console.log("- Event Name:", event.name);
            console.log("- Transaction:", event.transaction);
            console.log("- Block number:", event.block);
            console.log("- Result:", event.result, "\n");
            console.groupEnd();

            if (
              event.result.from == userWallet.address ||
              event.result.to == userWallet.address
            ) {
              getRecentTransactions().then((result) => {
                console.log(result);
                setUserWallet((prevState) => ({
                  ...prevState,
                  transactions: result,
                }));
              });
            }
          });
      })();
    }
  }, [userWallet]);

  return <Context.Provider value={{ userWallet }}>{children}</Context.Provider>;
}
