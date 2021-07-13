import React, {FC} from 'react';
import {RocketTwoTone} from '@ant-design/icons';
import styles from './Mock.module.scss'

const Mock: FC = () => {
    return (
        <div className={styles.wrapper}>
            <div>
                <div>
                    <strong className="mr-2">WE'RE COMING SOON</strong><RocketTwoTone style={{fontSize: '40px'}}/>
                </div>
                <p>We are working very hard on the new version of our site. It will bring a lot of new features. Stay
                    tuned!</p>
            </div>
        </div>
    )
};

export default Mock;