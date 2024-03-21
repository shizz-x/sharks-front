import style from "./Title.module.scss"
export function Title(props) {
    return(<h2  className={style.title}>
        {props.children}
    </h2>);
}