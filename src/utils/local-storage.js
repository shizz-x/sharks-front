import base58 from "bs58";

export const getMnemonicPhrase = (encode = false) => {
  try {
    return encode
      ? localStorage.getItem("MNEM")
      : String.fromCharCode.apply(
          null,
          base58.decode(localStorage.getItem("MNEM"))
        );
  } catch {
    return null;
  }
};

export const setMnemonicPhrase = (mnemonic, encode = true) => {
  localStorage.setItem(
    "MNEM",
    encode ? base58.encode(Buffer.from(mnemonic)) : mnemonic
  );
};

export const saveTheme = (theme) => {
  switch (theme) {
    case "dark":
      return localStorage.setItem("THEME", theme);
    case "white":
      return localStorage.setItem("THEME", theme);
    case undefined:
      return localStorage.getItem("THEME");
    default:
      break;
  }
};
