import {createContext, useContext, useEffect, useState} from "react";
import PropTypes from "prop-types";


const whiteTheme = "sharkWhiteTheme";
const blackTheme = "sharkBlackTheme";

const whiteValue = 'white';
const blackValue = 'dark';

export const ThemeValue = {
    white: whiteValue,
    dark: blackValue
}


ThemeContext.propTypes = {
    theme: PropTypes.oneOf([blackValue,whiteValue]).isRequired,
    darkMode: PropTypes.func,
    whiteMode: PropTypes.func,
}

const SharkThemeContext = createContext({
    theme: blackValue,
    darkMode: ()=>{},
    whiteMode: ()=>{},
})


export function ThemeContext(props) {
    const [theme,setTheme] = useState(props.theme);

    useEffect(()=>{
        document.body.classList.remove(whiteTheme);
        document.body.classList.remove(blackTheme);
        if(theme === whiteValue) {
            document.body.classList.add(whiteTheme);
        } else {
            document.body.classList.add(blackTheme);
        }
    },[theme]);

    return(
        <SharkThemeContext.Provider value={{
            theme: theme,
            whiteMode: ()=> setTheme(whiteValue),
            darkMode: () => setTheme(blackValue)
        }}>

            {props.children}
        </SharkThemeContext.Provider>
    );
}

export function useSharkTheme() {
    return useContext(SharkThemeContext);
}