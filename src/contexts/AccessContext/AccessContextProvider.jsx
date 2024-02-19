import React, { useEffect, useMemo, useState } from "react";
import Context from "./AccessContext";
import {
  setMnemonicPhrase,
  getMnemonicPhrase,
} from "../../utils/local-storage";

import { generateMnemonic, isMnemonicBackuped } from "../../utils/mnemonic";
import { useNavigate } from "react-router-dom";

export default function AccessContextProvider({ children }) {
  const [MNEMONIC_PHRASE, setMnemonicPhraseState] = useState(
    getMnemonicPhrase()
  );
  const navigate = useNavigate();

  useEffect(() => {
    const randomMnemonicToSet = generateMnemonic();
    if (!isMnemonicBackuped()) {
      setMnemonicPhrase(randomMnemonicToSet, false);
      setMnemonicPhraseState(randomMnemonicToSet);
      navigate("/login");
      return;
    } else {
      navigate("/wallet");
    }
  }, []);
  useEffect(() => {
    if (!MNEMONIC_PHRASE) {
      navigate("/login");
    }
  }, [MNEMONIC_PHRASE]);

  return (
    <Context.Provider value={{ MNEMONIC_PHRASE: MNEMONIC_PHRASE }}>
      {children}
    </Context.Provider>
  );
}
