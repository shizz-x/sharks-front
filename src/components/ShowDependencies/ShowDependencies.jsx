import PropTypes from "prop-types";

ShowDependencies.propTypes = {
    dependencies: PropTypes.bool.isRequired
}

export function ShowDependencies(props) {

    if(!props.dependencies) {
        return <></>
    } else {
        return (
            <>
                {props.children}
            </>
        );
    }
}