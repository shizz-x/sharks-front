import styled from "./MainLayout.module.scss";
import React from "react";
import { useSharkTheme } from "../ThemeContext/ThemeContext";
import { Button } from "react-bootstrap";
export function MainLayout(props) {
  const { whiteMode, darkMode } = useSharkTheme();

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
      </div>

      <div className={styled.containerBlock}>{props.children}</div>
    </div>
  );
}
