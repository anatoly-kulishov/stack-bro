/* Libs */
import React, { CSSProperties, FC } from 'react';
import { useSelector } from 'react-redux';
import { RocketTwoTone } from '@ant-design/icons';

/* Utils */
import { getAppState } from '../../../store/selectors/app-selectors';
import { isDarkTheme } from '../../../utils/boolean-helpers';
/* Assets */
import styles from './Mock.module.scss';

const TITLE_FONT_SIZE: CSSProperties = { fontSize: '40px' };

export const Mock: FC = () => {
  const { theme } = useSelector(getAppState);

  return (
    <div className={`${styles.wrapper} ${isDarkTheme(theme) ? styles.dark : styles.light}`}>
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
