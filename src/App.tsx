import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { WithLoading } from './components/common/WithLoading/WithLoading';
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
  const dispatch = useDispatch();
  const { initializeApp } = useActions();
  const { isAuth, isLoading } = useSelector(getAuthState);
  const { initialized, globalErrors } = useSelector(getAppState);
  const isAppReady = !initialized || isLoading;

  useEffect(() => {
    if (!isLoading) {
      initializeApp(isAuth);
    }
  }, [dispatch, initializeApp, isLoading, isAuth]);

  useEffect(() => {
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  }, []);

  if (globalErrors) {
    return <ErrorPage />;
  }

  return (
    <WithLoading isLoading={isAppReady} spinnerSize={SPINNER_SIZE}>
      <div className="default-background">{isAuth ? <AppRoutes /> : <AuthRoutes />}</div>
    </WithLoading>
  );
};
