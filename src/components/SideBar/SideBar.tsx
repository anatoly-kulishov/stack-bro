import React, { FC } from 'react';
import { Timeline } from 'antd';
import moment from 'moment';

import styles from './SideBar.module.scss';

export const SideBar: FC = () => {
  const currentTime = moment().format('L');

  return (
    <div className={styles.wrapper}>
      <Timeline>
        <Timeline.Item>Create a services site {currentTime}</Timeline.Item>
        <Timeline.Item>Technical testing {currentTime}</Timeline.Item>
      </Timeline>
    </div>
  );
};
