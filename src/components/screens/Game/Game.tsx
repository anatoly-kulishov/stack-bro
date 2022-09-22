import React, { FC } from 'react';
import cn from 'classnames';

import styles from './Game.module.scss';

export const Game: FC = () => {
  return (
    <div className={cn('default-box border-end-0', styles.MainWrapper)}>
      <react-chess />
    </div>
  );
};
