import React, { FC, StrictMode, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

import { catchAllUnhandledErrors } from './utils/errors-helpers/errors-helpers';
import { WithLoading } from './components/common/WithLoading/WithLoading';
import { getAuthState } from './store/selectors/auth-selectors';
import { getAppState } from './store/selectors/app-selectors';
import { AuthRoutes } from './routes/AuthRoutes/AuthRoutes';
import { initializeApp } from './store/actions/appActions';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { SPINNER_SIZE } from './constants/general';
import { store } from './store';
import './assets/styles/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import './App.scss';

const App: FC = () => {
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

export const StackBroTSApp: FC = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ErrorBoundary>
    </StrictMode>
  );
};
