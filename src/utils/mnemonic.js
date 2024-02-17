import { randomBytes, Mnemonic } from "ethers";
import { getMnemonicPhrase } from "./local-storage";
export const generateMnemonic = (mnemonicString = null) => {
  const mnemonic = mnemonicString || Mnemonic.entropyToPhrase(randomBytes(16));

  return Object.assign(mnemonic, {
    toArray: function () {
      return this.split(" ");
    },
    toString: function () {
      return this;
    },
  });
};

export const isValidMnemonic = (mnemonic) => {
  return Mnemonic.isValidMnemonic(mnemonic);
};

export const isMnemonicBackuped = () => {
  return !isValidMnemonic(getMnemonicPhrase(true));
};
