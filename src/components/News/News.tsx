import React from 'react';
import styles from './News.module.scss';
import Mock from "../common/Mock";

const News: React.FC = () => {
    return (
        <section className={`${styles.wrapper} default-box`}>
            <Mock/>
        </section>
    );
}

export default News;
