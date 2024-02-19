import { MainLayout } from "../../components/Layouts/MainLayout";
import video from "../../media/bg.mp4";
import { Button } from "../../components/Button/Button";
import { VideoBanner } from "../../components/VideoBanner/VideoBanner";
import { Link } from "react-router-dom";
import React from "react";
import { Container } from "react-bootstrap";
import { Logo } from "../../components/Logo/Logo";
import { setMnemonicPhrase } from "../../utils/local-storage";
import { isValidMnemonic } from "../../utils/mnemonic";

export default function Index(props) {
  const setMnemonicHandler = () => {
    const mnemonic = prompt("Your mnemonic phrase");

    if (isValidMnemonic(mnemonic)) {
      setMnemonicPhrase(mnemonic);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } else {
      alert("Mnemonic is not valid");
    }
  };

  return (
    <MainLayout>
      <VideoBanner video={video} borderRadius={true}>
        <Logo />
      </VideoBanner>
      <Container className={"gap-3 pt-10"}>
        <Link to={"/createWallet"} style={{ textDecoration: "none" }}>
          <Button className={"fw-bold"}>Create New wallet</Button>
        </Link>
        <Button onClick={setMnemonicHandler} withoutBorder={true}>
          Import wallet
        </Button>
      </Container>
    </MainLayout>
  );
}
