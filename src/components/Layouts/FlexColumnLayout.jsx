import PropTypes from "prop-types";
import classNames from "classnames";
import {ShowDependencies} from "../ShowDependencies/ShowDependencies";
import style from "./FlexColumnLayout.module.scss"

FlexColumnLayout.propTypes = {
    spaceAgentBefore: PropTypes.bool,
    spaceAgentAfter: PropTypes.bool,
    minVH: PropTypes.bool,
    bottomShadow:PropTypes.bool
}

export function FlexColumnLayout(props) {
    const SpaceAgent = (props)=><div className={'flex-grow-1'}></div>

    return (
        <div className={classNames('d-flex flex-column flex-grow-1',props.minVH?'min-vh-100':null,props.bottomShadow?style.bottomShadow:null)}>
            {props.spaceAgentBefore?<SpaceAgent/>:null}
            {props.children}
            {props.spaceAgentAfter?<SpaceAgent/>:null}
            <ShowDependencies dependencies={props.bottomShadow}>
                <div className={style.shadow}></div>
            </ShowDependencies>
        </div>
    );
}