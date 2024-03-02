import {Container} from "react-bootstrap";
import {TitleWithRightBlock} from "../TitleWithRightBlock/TitleWithRightBlock";
import PropTypes from "prop-types";
import style from "./StatusContainer.module.scss";
import {StatusCompleted} from "./StatusCompleted";
import {STATUS_COMPLETED, STATUS_FAILED, STATUS_PENDING, STATUS_RECEIVED} from "./StatusModel";
import {StatusPending} from "./StatusPending";
import {StatusFailed} from "./StatusFailed";


StatusContainer.propTypes = {
    title: PropTypes.string.isRequired,
    status: PropTypes.oneOf([STATUS_FAILED,STATUS_COMPLETED,STATUS_PENDING,STATUS_RECEIVED]).isRequired
}

const Status = (props)=>{
    switch (props.status) {
        case  STATUS_PENDING:
            return <StatusPending />
        case  STATUS_FAILED:
            return <StatusFailed />
        case STATUS_COMPLETED:
            return <StatusCompleted title={'Completed'} />
        case STATUS_RECEIVED:
            return <StatusCompleted title={'Received'} />
        default:
            return <></>
    }
}
export function StatusContainer(props) {
    return(
        <Container className={style.statusContainer}>
            <TitleWithRightBlock title={props.title}>
                <Status status={props.status} />
            </TitleWithRightBlock>
            {props.children}
        </Container>
    );
}