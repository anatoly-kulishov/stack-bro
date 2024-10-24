import React, { FC, useCallback, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { WithLoading } from './components/ui/WithLoading/WithLoading';
import { UpButton } from './components/ui/UpButton/UpButton';
import { getAuthState } from './store/selectors/auth-selectors';
import { getAppState } from './store/selectors/app-selectors';
import { AuthRoutes } from './routes/AuthRoutes/AuthRoutes';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { catchAllUnhandledErrors } from './utils/error';
import { SPINNER_SIZE } from './configs/constants';
import { useActions } from './store';

import './assets/styles/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import './App.scss';

export const App: FC = () => {
  const { initializeApp } = useActions();
  const { isAuth, isLoading } = useSelector(getAuthState);
  const { initialized, globalErrors } = useSelector(getAppState);

  const isAppReady = useMemo(() => !initialized || isLoading, [initialized, isLoading]);

  const initApp = useCallback(() => {
    if (!isLoading) {
      initializeApp(isAuth);
    }
  }, [initializeApp, isLoading, isAuth]);

  const setupErrorHandling = useCallback(() => {
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  }, []);

  useEffect(initApp, [initApp]);
  useEffect(setupErrorHandling, [setupErrorHandling]);

  if (globalErrors) {
    return <ErrorPage />;
  }

  return (
    <WithLoading isLoading={isAppReady} spinnerSize={SPINNER_SIZE}>
      <div className="default-background">{isAuth ? <AppRoutes /> : <AuthRoutes />}</div>
      <UpButton />
    </WithLoading>
  );
};
