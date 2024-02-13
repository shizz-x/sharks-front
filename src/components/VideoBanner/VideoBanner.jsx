import styles from "./VideoBanner.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";

VideoBanner.propTypes = {
    video: PropTypes.string.isRequired,
    borderRadius: PropTypes.bool,
    sticky: PropTypes.bool
}

export function VideoBanner(props) {
    return (
        <div className={classNames(styles.banner,props.borderRadius?styles.round:null,props.sticky?styles.sticky:null)}>
            <video autoPlay muted loop id="myVideo">
                <source src={props.video} type="video/mp4"/>
            </video>
            <div className={styles.containerVideo}>
                {props.children}
            </div>
        </div>
    );
}