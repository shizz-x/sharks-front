import style from './StatusPending.module.scss'
import {Spinner} from "react-bootstrap";
export function StatusPending(props) {
    return (
        <div className={style.statusPending}>
            Pending <Spinner className={style.spinner} animation="border"   />
        </div>
    );
}