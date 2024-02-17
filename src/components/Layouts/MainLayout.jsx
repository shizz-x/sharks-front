import styled from "./MainLayout.module.scss";
import React, { useEffect } from "react";
import { useSharkTheme } from "../ThemeContext/ThemeContext";
import { Button, InputGroup } from "react-bootstrap";
import { setMnemonicPhrase } from "../../utils/local-storage";
import { theme } from "../../utils/local-storage";
export function MainLayout(props) {
  const { whiteMode, darkMode } = useSharkTheme();
  const setMnemonicHandler = (e) => {
    setMnemonicPhrase(e.target.value);
  };
  const resetLocalStorageHandler = () => {
    localStorage.clear();
  };

  return (
    <div className={styled.mobileCentered}>
      <div style={{ position: "absolute", top: 10, left: 10, color: "red" }}>
        <Button onClick={() => whiteMode()} variant={"outline-light"}>
          White
        </Button>
        <br />
        <br />
        <Button onClick={() => darkMode()} variant={"outline-light"}>
          Dark
        </Button>
        <br />
        <br />
        <input
          type="text"
          placeholder="MNEMONIC"
          onPaste={setMnemonicHandler}
        />
        <Button onClick={resetLocalStorageHandler}>reset</Button>
      </div>

      <div className={styled.containerBlock}>{props.children}</div>
    </div>
  );
}
