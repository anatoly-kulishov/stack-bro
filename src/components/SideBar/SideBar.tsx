import React from 'react';
import {Timeline} from "antd";
import moment from 'moment';
import styles from "./SideBar.module.scss"

const SideBar: React.FC = props => {
    const {} = props;
    const currentTime = moment().format('L');

    return (
        <div className={styles.wrapper}>
            <Timeline>
                <Timeline.Item>Create a services site {currentTime}</Timeline.Item>
                <Timeline.Item>Technical testing {currentTime}</Timeline.Item>
            </Timeline>
        </div>
    )
}

export default SideBar;
