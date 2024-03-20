import style from "./StatusFailed.module.scss";

import {QuestIcon} from "../Icon/Quest/QuestIcon";


export function StatusFailed(props) {
    return(
        <div className={style.statusFailed}>
            <div className={style.statusBG}>
                Failed <QuestIcon spanClass={style.icon} />
            </div>
        </div>
    );
}