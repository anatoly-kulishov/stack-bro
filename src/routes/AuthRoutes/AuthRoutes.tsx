import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../../pages/LoginPage/LoginPage';
import styles from './AuthRoutes.module.scss';

export const AuthRoutes: FC = () => {
  return (
    <div className={styles.auth}>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
