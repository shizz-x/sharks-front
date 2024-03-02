import PropTypes from "prop-types";
import classNames from "classnames";
import { ReactComponent as QuestSVG } from "../../../media/quest_icon.svg"


QuestIcon.propTypes = {
    spanClass: PropTypes.string,
    svgClass: PropTypes.string
}

export function QuestIcon(props) {
    return (
        <span className={classNames(props.spanClass)}>
            <QuestSVG className={classNames(props.svgClass)} />
        </span>
    );
}