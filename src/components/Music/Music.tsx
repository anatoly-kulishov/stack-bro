import React from 'react';
import styles from './Music.module.scss';

const Music: React.FC = () => {
    return (
        <section className={`default-box p-3`}>
            <h3 className={styles.title}>Music</h3>
        </section>
    );
}

export default Music;