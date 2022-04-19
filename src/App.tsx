import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { catchAllUnhandledErrors } from './utils/errors-helpers/errors-helpers';
import { WithLoading } from './components/common/WithLoading/WithLoading';
import { getAuthState } from './store/selectors/auth-selectors';
import { getAppState } from './store/selectors/app-selectors';
import { AuthRoutes } from './routes/AuthRoutes/AuthRoutes';
import { initializeApp } from './store/actions/appActions';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { SPINNER_SIZE } from './constants/general';
import './assets/styles/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import './App.scss';

export const App: FC = () => {
  const dispatch = useDispatch();
  const { initialized, globalErrors } = useSelector(getAppState);
  const { isAuth, isLoading } = useSelector(getAuthState);
  const isAppReady = !initialized || isLoading;

  useEffect(() => {
    if (!isLoading) {
      dispatch(initializeApp(isAuth));
    }
  }, [isLoading, isAuth, dispatch]);

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
