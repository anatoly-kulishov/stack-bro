import React from 'react';
import styles from "./Logo.module.scss";
import logo from "./logo.svg";

const Logo: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.logo} src={logo} alt=""/>
        </div>
    );
}

export default Logo;
