import React from 'react';
import styles from './News.module.scss';

const News: React.FC = () => {
    return (
        <section className={`default-box p-3`}>
            <h3 className={styles.title}>News</h3>
        </section>
    );
}

export default News;
