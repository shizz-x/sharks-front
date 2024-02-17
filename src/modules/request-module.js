import axios from "axios";
export const getAvaliableTokens = async () => {
  try {
    const response = await axios.get("https://gogi.meme/api/assets", {});
    return response.data.avaliableTokens;
  } catch (error) {
    return null;
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
