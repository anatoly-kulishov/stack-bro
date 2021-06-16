import React from 'react';
import {Spin} from 'antd';
import styles from './Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={styles.wrapper}>
            <Spin size="large"/>
        </div>
    );
};

export default Spinner;
