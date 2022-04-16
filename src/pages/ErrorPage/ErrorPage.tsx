import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { getAppState } from '../../store/selectors/app-selectors';
import { smthWentWrong } from '../../constants/errors';
import styles from './ErrorPage.module.scss';

type ErrorPagePropsType = {};

export const ErrorPage: FC<ErrorPagePropsType> = () => {
  const { globalErrors } = useSelector(getAppState);

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={`${styles.frame} default-background`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{globalErrors ?? 404}</h1>
        <p className={styles.description}>{smthWentWrong}</p>
        <button onClick={refreshPage}>Reload</button>
      </div>
    </div>
  );
};
