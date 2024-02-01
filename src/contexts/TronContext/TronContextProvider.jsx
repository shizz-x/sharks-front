import { useEffect, useState } from "react";
import Context from "./TronContex";
import UseAccessContext from "../AccessContext/UseAccessContext";
import TronWeb from "tronweb";
import { decode } from "../../utils/cypher-cbc";
import distrAbi from "./ABI/distr";
import trc20Abi from "./ABI/trc20";
export default function TronContextProvider({ children }) {
  const [tronWeb, setSetTronWeb] = useState(undefined);
  const [walletAddress, setWalletAddress] = useState(undefined);
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletEnergy, setWalletEnergy] = useState(0);
  const [avaliableTokens, setAvaliableTokens] = useState([]);
  const [walletTokens, setWalletTokens] = useState([]);

  const { userData, avaliableTokensHandler } = UseAccessContext();

  const createTronWebInstance = async () => {
    const privateKey = decode(userData.password, userData.privateKey);
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider(
      parseInt(process.env.REACT_APP_DEV)
        ? process.env.REACT_APP_TRON_TESTNET
        : process.env.REACT_APP_TRON_MAINNET
    );
    const solidityNode = new HttpProvider(
      parseInt(process.env.REACT_APP_DEV)
        ? process.env.REACT_APP_TRON_TESTNET
        : process.env.REACT_APP_TRON_MAINNET
    );
    const eventServer = new HttpProvider(
      parseInt(process.env.REACT_APP_DEV)
        ? process.env.REACT_APP_TRON_TESTNET
        : process.env.REACT_APP_TRON_MAINNET
    );

    const tronWeb = new TronWeb(
      fullNode,
      solidityNode,
      eventServer,
      privateKey
    );
    console.log(tronWeb);

    setSetTronWeb(tronWeb);
  };
  const getWalletResources = async () => {
    const balance = await tronWeb.trx.getBalance(tronWeb.defaultAddress.base58);
    const energy = await tronWeb.trx.getAccountResources(
      tronWeb.defaultAddress.base58
    );
    console.log(energy);

    setWalletEnergy(energy.EnergyLimit - energy.EnergyUsed);
    setWalletAddress(tronWeb.defaultAddress.base58);
    setWalletBalance(balance);
  };

  const getWalletTokens = async () => {
    const avaliableTokens = await avaliableTokensHandler();

    if (avaliableTokens) {
      setAvaliableTokens(avaliableTokens);
    }
  };

  const transferTokens = async (tokenAddress, amount, to) => {
    const contractDistributor = tronWeb.contract(
      distrAbi,
      process.env.REACT_APP_DISTRIBUTOR_CONTRACT_ADDRESS
    );
    const contractToken = tronWeb.contract(trc20Abi, tokenAddress);

    const txID = await contractToken
      .approve(process.env.REACT_APP_DISTRIBUTOR_CONTRACT_ADDRESS, amount)
      .send();

    const txID2 = await contractDistributor.transfer(to, tokenAddress).send();
    console.log(txID2);
  };

  useEffect(() => {
    if (userData.accessToken) {
      createTronWebInstance();
    }
  }, [userData]);
  useEffect(() => {
    if (tronWeb) {
      getWalletResources();
      getWalletTokens();
    }
  }, [tronWeb]);
  useEffect(() => {
    if (walletAddress) {
      const _getTokenBalance = async (walletAddress, contractAddress) => {
        let contract = await tronWeb.contract().at(contractAddress);
        let result = await contract.balanceOf(walletAddress).call();
        return result;
      };
      if (walletTokens.length + 1 > avaliableTokens.length) {
        //bug fix
        return;
      }

      avaliableTokens.forEach(async (token) => {
        const tokenBalance = await _getTokenBalance(
          walletAddress,
          token.contractAddress
        );
        if (tokenBalance > 0) {
          const balanceInTron = tokenBalance * 10 ** -token.decimals;
          setWalletTokens((previosState, prop) => [
            {
              avaliable: tokenBalance,
              avaliableFloat: balanceInTron,
              ...token,
            },
            ...previosState,
          ]);
        }
      });
    }
  }, [avaliableTokens, walletAddress]);

  return (
    <Context.Provider
      value={{
        walletAddress,
        walletBalance,
        walletEnergy,
        walletTokens,
        tronWeb,
        transferTokens,
      }}
    >
      {children}
    </Context.Provider>
  );
}
