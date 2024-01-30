import { useEffect, useState } from "react";
import Context from "./TronContex";
import UseAccessContext from "../AccessContext/UseAccessContext";

export default function TronContextProvider({ children }) {
  const [walletTronBalance, setWalletTronBalance] = useState(0);
  const [walletTrc20Array, setWalletTrc20Array] = useState([]);
  const [walletAddress, setWalletAddress] = useState("");
  const { userData } = UseAccessContext();

  const getUserWalletData = async () => {
    console.log(userData);
  };

  useEffect(() => {
    if (userData.accessToken) {
      getUserWalletData();
    }
  }, [userData]);

  return <Context.Provider>{children}</Context.Provider>;
}
