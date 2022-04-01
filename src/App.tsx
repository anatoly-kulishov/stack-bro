import React, { ComponentType, FC, StrictMode, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import { compose } from 'redux';

import { WithLoading } from './components/common/WithLoading/WithLoading';
import { store } from './store';
import { initializeApp } from './store/actions/appActions';
import { AppStateType } from './store/reducers/rootReducer';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import { AuthRoutes } from './routes/AuthRoutes/AuthRoutes';
import { catchAllUnhandledErrors } from './utils/errors-helpers';
import { SPINNER_SIZE } from './constants/general';
import './assets/styles/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import './App.scss';

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = { initializeAppFC: (isAuth: boolean) => void };

const App: FC<MapPropsType & DispatchPropsType> = props => {
  const { initialized, isAuth, isLoading, initializeAppFC } = props;

  useEffect(() => {
    if (!isLoading) {
      initializeAppFC(isAuth);
    }
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  }, [initializeAppFC, isLoading, isAuth]);

  return (
    <WithLoading isLoading={!initialized || isLoading} spinnerSize={SPINNER_SIZE}>
      {isAuth ? <AppRoutes /> : <AuthRoutes />}
    </WithLoading>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
  isLoading: state.auth.isLoading,
});

const AppContainer = compose<ComponentType>(connect(mapStateToProps, { initializeAppFC: initializeApp }))(App);

export const StackBroTSApp: FC = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>
          <AppContainer />
        </Router>
      </Provider>
    </StrictMode>
  );
};
