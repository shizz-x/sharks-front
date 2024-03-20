import styles from "./VideoBanner.module.scss";
import PropTypes from "prop-types";
import classNames from "classnames";
import sumSvg from "../../media/Summ.svg"
import vectorSvg from "../../media/Vector.svg"

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
                styles.targetVideoBanner
            )}
        >
            <div className={classNames(styles.topBar)}></div>
            <div className={classNames(styles.background)}>
                <div className={classNames(styles.gradient)}></div>
                <div className={classNames(styles.blur)}></div>
                <img src={vectorSvg} className={classNames(styles.primary)} />
                <img src={vectorSvg} className={classNames(styles.secondary)}/>
            </div>
            <div className={styles.containerVideo}>
                {props.children}
            </div>
            <Component />
        </div>
    );
}