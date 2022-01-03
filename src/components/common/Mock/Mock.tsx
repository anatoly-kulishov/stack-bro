import React, {FC, memo} from 'react';
import {RocketTwoTone} from '@ant-design/icons';
import styles from './Mock.module.scss'
import {useSelector} from "react-redux";
import {getAppTheme} from "../../../store/selectors/app-selectors";
import {isDarkTheme} from "../../../utils/boolean-helpers";

const Mock: FC = () => {
    const appTheme = useSelector(getAppTheme);

    return (
        <div className={`${styles.wrapper} ${isDarkTheme(appTheme) ? styles.dark : styles.light}`}>
            <div className={styles.content}>
                <div>
                    <strong className="mr-2">WE'RE COMING SOON</strong><RocketTwoTone style={{fontSize: '40px'}}/>
                </div>
                <p>We are working very hard on the new version of our site. It will bring a lot of new features. Stay
                    tuned!</p>
            </div>
        </div>
    )
};

export default memo(Mock);