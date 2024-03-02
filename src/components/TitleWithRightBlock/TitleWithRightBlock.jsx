import style from "./TitleWithRightBlock.module.scss";
import PropTypes from "prop-types";


TitleWithRightBlock.propTypes = {
    title: PropTypes.string.isRequired
}
export function TitleWithRightBlock(props) {
    return (
        <div className={style.titleWithRightBlock}>
            <span className={style.text}>{props.title}</span>
            <div className={style.rightBlock}>{props.children}</div>
        </div>
    );
}