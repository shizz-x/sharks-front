import styles from "./Logo.module.scss";
import React from "react";
import LogoImg from "../../media/logo.svg"

export function Logo(){
    return(
        <div className={styles.logo}>
            <img src={LogoImg} alt={'Sharks'}/>
        </div>
    );
}