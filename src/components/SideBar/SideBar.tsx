import React, { FC } from 'react';
import { Timeline } from 'antd';
import { format } from 'date-fns';

import styles from './SideBar.module.scss';

export const SideBar: FC = () => {
  const currentTime = format(new Date(), 'L');

  return (
    <div className={styles.wrapper}>
      <Timeline>
        <Timeline.Item>Create a services site {currentTime}</Timeline.Item>
        <Timeline.Item>Technical testing {currentTime}</Timeline.Item>
      </Timeline>
    </div>
  );
};
