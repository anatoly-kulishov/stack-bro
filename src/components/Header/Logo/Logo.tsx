import React from 'react';
import styles from "./Logo.module.scss";
import logo from "./logo.svg";

const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src={logo} alt="StackBro"/>
        </div>
    );
}

export default Logo;
