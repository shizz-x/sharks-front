import PropTypes from "prop-types";
import { Container } from "react-bootstrap";
import style from "./SecretPhrase.module.scss";
import { SecretPhraseItem } from "./SecretPhraseItem";
import classNames from "classnames";

SecretPhrase.propTypes = {
  phrases: PropTypes.array.isRequired,
  show: PropTypes.bool.isRequired,
  showNumber: PropTypes.bool.isRequired,
};

export function SecretPhrase(props) {
  return (
    <Container className={classNames(style.phraseList)}>
      {props.phrases.map((value, index) => (
        <SecretPhraseItem
          key={index}
          show={props.show}
          text={value}
          position={index}
          showNumber={props.showNumber}
        />
      ))}
    </Container>
  );
}
