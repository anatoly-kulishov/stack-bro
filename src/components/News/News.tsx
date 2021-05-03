import React from 'react';
import styles from './News.module.scss';

const News: React.FC = () => {
    return (
        <section className={styles.news}>
            <h3 className={styles.title}>News</h3>
        </section>
    );
}

export default News;
