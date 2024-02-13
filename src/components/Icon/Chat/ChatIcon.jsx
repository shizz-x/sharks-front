import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as ChatSVG } from "../../../media/chat_icon.svg"


ChatIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function ChatIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <ChatSVG className={classNames(props.svgClass)} />
        </span>
    );
}