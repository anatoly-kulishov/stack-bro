import React from 'react';
import styles from './Music.module.scss';
import Mock from "../common/Mock";

const Music: React.FC = () => {
    return (
        <section className={`${styles.wrapper} default-box`}>
            <Mock/>
        </section>
    );
}

export default Music;