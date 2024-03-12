import PropTypes from "prop-types";
import react, {useContext, useEffect, useState} from "react";

BlurContext.propTypes = {
    blurWindow:PropTypes.func,
    setComponents:PropTypes.func,
    show:PropTypes.bool,
    Component:PropTypes.element

}

const BlrContext = react.createContext({
    blurWindow: (blur,components)=>{},
    show:false,
    Component:<></>
})


export function BlurContext(props){
    const [blur,setBlur] = useState(false);
    const [component,setComponent] = useState(<></>);

    return (
        <BlrContext.Provider value={{
            blurWindow:(blur,components=<></>)=>{setBlur(blur);setComponent(components)},
            show:blur,
            Component: component,
        }}>
            {props.children}
        </BlrContext.Provider>
    )
}



export function useBlur() {
    return useContext(BlrContext);

}