import PropTypes from "prop-types";

ShowDependencies.propTypes = {
    dependencies: PropTypes.bool
}

export function ShowDependencies(props) {
    const dep = props.dependencies!==undefined?props.dependencies:false;

    if(!dep) {
        return <></>
    } else {
        return (
            <>
                {props.children}
            </>
        );
    }
}