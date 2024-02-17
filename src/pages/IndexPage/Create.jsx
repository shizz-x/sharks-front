import { MainLayout } from "../../components/Layouts/MainLayout";
import { VideoBanner } from "../../components/VideoBanner/VideoBanner";
import video from "../../media/bg.mp4";
import React, { useState } from "react";
import { Menu } from "../../components/Menu/Menu";
import { Link } from "react-router-dom";
import { ArrowIcon } from "../../components/Icon/Arrow/ArrowIcon";
import { ChatIcon } from "../../components/Icon/Chat/ChatIcon";
import { Container } from "react-bootstrap";
import { SecretPhrase } from "../../components/SecretPhrase/SecretPhrase";
import { PhraseButton } from "../../components/Button/PhraseButton";
import { EyeIcon } from "../../components/Icon/Eye/EyeIcon";
import { NumList } from "../../components/NumList/NumList";
import { generateMnemonic } from "../../utils/mnemonic";
import { getMnemonicPhrase } from "../../utils/local-storage";

const numList = [
  {
    title: "Back up Recovery Phrase",
    text: "This is your Secret Recovery Phrase. Write it down on a paper and keep ot in a safe place. You'll be asked to re-enter this phrase (in order) on the next step.",
    select: true,
  },
  {
    title: "Confirm Recovery Phrase",
    text: "Reorder each word in order it was presented for you.",
    select: false,
  },
];

export default function Create(props) {
  const [show, setShow] = useState(false);
  return (
    <MainLayout>
      <VideoBanner video={video} borderRadius={true}>
        <Menu>
          <Menu.Left>
            <Link to={-1}>
              <ArrowIcon />
            </Link>
          </Menu.Left>
          <Menu.Title>Back up Secret Phrase</Menu.Title>
          <Menu.Right>
            <Link to={"#"}>
              <ChatIcon />
            </Link>
          </Menu.Right>
        </Menu>

        <SecretPhrase
          phrases={generateMnemonic(getMnemonicPhrase(true)).toArray()}
          show={show}
          showNumber={true}
        />

        <Container>
          {!show ? (
            <PhraseButton onClick={() => setShow(true)}>
              <EyeIcon />
              <span
                style={{
                  marginLeft: 15,
                  paddingTop: 2,
                  display: "inline-block",
                  verticalAlign: -2,
                }}
              >
                View phrase
              </span>
            </PhraseButton>
          ) : (
            <Link to={"/shuffleWallet"}>
              <PhraseButton>
                <ArrowIcon leftToRight={true} />
                <span
                  style={{
                    marginLeft: 15,
                    paddingTop: 2,
                    display: "inline-block",
                    verticalAlign: -2,
                  }}
                >
                  Continue
                </span>
              </PhraseButton>
            </Link>
          )}
        </Container>
      </VideoBanner>
      <Container className={"pt-10"}>
        <NumList list={numList}></NumList>
      </Container>
    </MainLayout>
  );
}
