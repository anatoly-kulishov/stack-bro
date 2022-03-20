import React, { FC } from 'react';

import styles from './Contact.module.scss';
import { Nullable } from '../../../../../types';

type ContactPropsType = {
  isLogic: boolean;
  title: string;
  value: Nullable<string> | undefined;
};

export const Contact: FC<ContactPropsType> = props => {
  const { isLogic, title = '', value } = props;

  if (isLogic && value) {
    return (
      <div className={styles.row}>
        <div className={styles.label}>{title}:</div>
        <a href={`${value}`} target="_blank" rel="noreferrer noopener">
          <div className={styles.desc}>{value && value}</div>
        </a>
      </div>
    );
  }
  return null;
};
