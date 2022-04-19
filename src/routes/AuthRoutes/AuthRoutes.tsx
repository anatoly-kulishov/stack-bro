import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../pages/LoginPage/LoginPage';
import { AppRoutesEnum } from '../../types';
import styles from './AuthRoutes.module.scss';

export const AuthRoutes: FC = () => {
  return (
    <div className={styles.auth}>
      <div>
        <Routes>
          <Route path={AppRoutesEnum.HOME} element={<LoginPage />} />
          <Route path="*" element={<Navigate to={AppRoutesEnum.HOME} />} />
        </Routes>
      </div>
    </div>
  );
};
