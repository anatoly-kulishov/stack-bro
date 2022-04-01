import React, { CSSProperties, FC } from 'react';
import { RocketTwoTone } from '@ant-design/icons';

import styles from './Mock.module.scss';

const TITLE_FONT_SIZE: CSSProperties = { fontSize: '40px' };

export const Mock: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className="mb-2">
          <strong className="mr-2">WE&apos;RE COMING SOON</strong>
          <RocketTwoTone style={TITLE_FONT_SIZE} />
        </div>
        <p>We are working very hard on the new version of our site. It will bring a lot of new features. Stay tuned!</p>
      </div>
    </div>
  );
};
