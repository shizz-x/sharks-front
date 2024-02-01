import { useEffect, useState } from "react";
import Context from "./TronContex";
import UseAccessContext from "../AccessContext/UseAccessContext";
import TronWeb from "tronweb";
import { decode } from "../../utils/cypher-cbc";

export default function TronContextProvider({ children }) {
  const [tronWeb, setSetTronWeb] = useState(undefined);
  const [walletAddress, setWalletAddress] = useState(undefined);
  const [walletBalance, setWalletBalance] = useState(0);
  const [walletEnergy, setWalletEnergy] = useState(0);
  const [walletTokens, setWalletTokens] = useState([]);

  const { userData } = UseAccessContext();

  const createTronWebInstance = async () => {
    const privateKey = decode(userData.password, userData.privateKey);
    const HttpProvider = TronWeb.providers.HttpProvider;
    const fullNode = new HttpProvider("https://api.trongrid.io");
    const solidityNode = new HttpProvider("https://api.trongrid.io");
    const eventServer = new HttpProvider("https://api.trongrid.io");

    const tronWeb = new TronWeb(
      fullNode,
      solidityNode,
      eventServer,
      privateKey
    );

    setSetTronWeb(tronWeb);
  };
  const getWalletAssets = async () => {
    const balance = await tronWeb.trx.getBalance(tronWeb.defaultAddress.base58);
    const energy = await tronWeb.trx.getAccountResources(
      tronWeb.defaultAddress.base58
    );
    console.log(energy);

    setWalletEnergy(0);
    setWalletAddress(tronWeb.defaultAddress.base58);
    setWalletBalance(balance);
  };

  useEffect(() => {
    if (userData.accessToken) {
      createTronWebInstance();
    }
  }, [userData]);
  useEffect(() => {
    if (tronWeb) {
      getWalletAssets();
    }
  }, [tronWeb]);

  return (
    <Context.Provider
      value={{
        walletAddress,
        walletBalance,
        walletEnergy,
        walletTokens,
      }}
    >
      {children}
    </Context.Provider>
  );
}
