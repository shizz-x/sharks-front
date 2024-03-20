import PropTypes from "prop-types";
import style from "./FilterForList.module.scss";
import {FilterIcon} from "../Icon/Filter/FilterIcon";


FilterForList.propTypes={
    title: PropTypes.string.isRequired,
    handleFilterClick:PropTypes.func
}
export function FilterForList(props) {
    return(
        <div className={style.header}>
            {props.title}
            <FilterIcon spanClass={style.filter} />
        </div>
    );
}