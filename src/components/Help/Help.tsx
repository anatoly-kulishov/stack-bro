import React from 'react';
import styles from './Help.module.scss';
import Mock from "../common/Mock";

const Help: React.FC = () => {
    return (
        <section className={`${styles.wrapper} default-box`}>
            <Mock/>
        </section>
    );
}

export default Help;