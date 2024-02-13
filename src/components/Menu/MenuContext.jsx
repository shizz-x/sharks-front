import react, {useContext, useState} from "react";
import PropTypes from "prop-types";


MenuContext.propTypes = {
    isLeftBlock: PropTypes.bool,
    isTitleBlock: PropTypes.bool,
    isRightBlock: PropTypes.bool,
    setLeftBlock: PropTypes.func,
    setTitleBlock: PropTypes.func,
    setRightBlock: PropTypes.func,
}

const MenuTopContext = react.createContext({
    isLeftBlock: false,
    isTitleBlock:false,
    isRightBlock: false,
    setLeftBlock:()=>{},
    setTitleBlock: ()=>{},
    setRightBlock: ()=>{}
})

export function MenuContext(props) {
    const [leftBlock,setLeftBlock] = useState(false);
    const [titleBlock,setTitleBlock] = useState(false);
    const [rightBlock,setRightBlock] = useState(false);

    return (
        <MenuTopContext.Provider value={{
            isLeftBlock: leftBlock,
            isTitleBlock:titleBlock,
            isRightBlock: rightBlock,
            setLeftBlock:setLeftBlock,
            setTitleBlock: setTitleBlock,
            setRightBlock: setRightBlock
        }}>
            {props.children}
        </MenuTopContext.Provider>
    );

}

export function useSharkMenu() {
    return useContext(MenuTopContext);
}