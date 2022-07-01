import React, { FC } from 'react';

import { Nullable, Undetectable } from '../../../../../types';
import styles from './Contact.module.scss';

type ContactPropsType = {
  isLogic: boolean;
  title: string;
  value: Undetectable<Nullable<string>>;
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
