import React, { ComponentType, FC, StrictMode, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, Provider, useSelector } from 'react-redux';
import { compose } from 'redux';

import { WithLoading } from './components/common/WithLoading/WithLoading';
import { store } from './store';
import { initializeApp } from './store/actions/appActions';
import { AppStateType } from './store/reducers/rootReducer';
import { getAppState } from './store/selectors/app-selectors';
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
  const { initialized, isAuth, initializeAppFC } = props;
  const { theme } = useSelector(getAppState);

  useEffect(() => {
    initializeAppFC(isAuth);
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  }, [initializeAppFC, isAuth]);

  return (
    <WithLoading isLoading={!initialized} spinnerSize={SPINNER_SIZE}>
      <div className={`app--${theme}`}>{isAuth ? <AppRoutes /> : <AuthRoutes />}</div>
    </WithLoading>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
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
