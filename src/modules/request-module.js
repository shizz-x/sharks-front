import axios from "axios";

const avaliableTokens = {
  "avaliableTokens": [
      {
          "name": "Tether USD",
          "ticker": "USDT",
          "fees": {
              "usd": 2,
              "sun": 2000000
          },
          "contractAddress": "TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs",
          "logo": "https://tether.to/images/logoMarkGreen.png",
          "decimals": 6
      }
  ]
}

export const getAvaliableTokens = async () => {
  try {
    const response = await axios.get(
      window.location.href.includes("localhost")
        ? "http://localhost:5001/api/assets"
        : "https://gogi.meme/api/assets",
      {}
    );
    return response.data.avaliableTokens;
  } catch (error) {
    return avaliableTokens.avaliableTokens;
  }
};
export const getTransactionsForAnAddress = async (
  tronweb,
  contractAddress,
  userAddress
) => {
  try {
    const response = await axios.get(
      `${
        tronweb.fullNode.host
      }/v1/accounts/${userAddress}/transactions/${"trc20"}`,
      { params: { contract_address: contractAddress } }
    );
    return response.data.data;
  } catch (error) {
    return null;
  }
};
