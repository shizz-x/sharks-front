import styles from './TextBanner.module.scss'
import {Container} from "react-bootstrap";

export function TextBanner(props) {
    return (
        <div className={styles.textBanner}>
            <Container className={styles.container}>
                {props.children}
            </Container>
        </div>
    );
}