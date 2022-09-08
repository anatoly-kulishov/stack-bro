import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Game.module.scss';

export const Game: FC = () => {
  return (
    <div className={classNames('default-box border-end-0', styles.MainWrapper)}>
      <react-chess />
    </div>
  );
};
