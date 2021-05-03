import React from 'react';
import styles from './Music.module.scss';

const Music: React.FC = () => {
    return (
        <section className={styles.music}>
            <h3 className={styles.title}>Music</h3>
        </section>
    );
}

export default Music;