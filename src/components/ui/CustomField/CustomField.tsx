import React from 'react';
import styles from './Settings.module.scss';

const CustomField: React.FC = () => {
    return (
        <section className={styles.settings}>
            <h3 className={styles.title}>Settings</h3>
        </section>
    );
}

export default CustomField;