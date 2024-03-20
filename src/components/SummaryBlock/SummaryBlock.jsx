import style from "./SummaryBlock.module.scss";

SummaryBlock.typeProps={

}

export function SummaryBlock(props) {
    return(
        <div className={style.summaryBlock}>
            {props.children}
        </div>
    );
}