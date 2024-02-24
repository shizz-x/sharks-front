import styles from "./VideoBanner.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";

VideoBanner.propTypes = {
    video: PropTypes.string.isRequired,
    borderRadius: PropTypes.bool,
    sticky: PropTypes.bool,
    fullScreen:PropTypes.bool,
    MainBlockComponent: PropTypes.func
}

export function VideoBanner(props) {
    const Component = props.MainBlockComponent?props.MainBlockComponent:()=><></>;
    return (
        <div
            className={classNames(
                styles.banner,
                props.borderRadius?styles.round:null,
                props.sticky?styles.sticky:null,
                props.fullScreen?styles.fullScreen:null
            )}
        >
            <video autoPlay loop muted playsInline id="myVideo" src={props.video}>

            </video>
            <div className={styles.containerVideo}>
                {props.children}
            </div>
            <Component />
        </div>
    );
}