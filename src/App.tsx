/** Libs * */
import React, { FC, StrictMode, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, Provider, useSelector } from 'react-redux';
import { compose } from 'redux';

/** Components * */
// eslint-disable-next-line import/order
import { WithLoading } from './components/common/WithLoading/WithLoading';

/** Utils * */
import { store } from './store';
import { AppRoutes } from './routes/AppRoutes/AppRoutes';
import { AuthRoutes } from './routes/AuthRoutes/AuthRoutes';
import { catchAllUnhandledErrors } from './utils/errors-helpers';
import { initializeApp } from './store/actions/appActions';
import { AppStateType } from './store/reducers/rootReducer';
import { getAppState } from './store/selectors/app-selectors';

/** Styles * */
import './assets/styles/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import './App.scss';

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = { initializeApp: (isAuth: boolean) => void };

const App: FC<MapPropsType & DispatchPropsType> = props => {
  /* eslint-disable @typescript-eslint/no-shadow */
  const { initialized, initializeApp, isAuth } = props;
  const { theme } = useSelector(getAppState);

  useEffect(() => {
    initializeApp(isAuth);
    window.addEventListener('unhandledrejection', catchAllUnhandledErrors);
    return () => {
      window.removeEventListener('unhandledrejection', catchAllUnhandledErrors);
    };
  }, [initializeApp, isAuth]);

  return (
    <WithLoading isLoading={!initialized} spinnerSize={'40px'}>
      <div className={`app--${theme}`}>{isAuth ? <AppRoutes /> : <AuthRoutes />}</div>
    </WithLoading>
  );
};

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth,
});

const AppContainer = compose<React.ComponentType>(connect(mapStateToProps, { initializeApp }))(App);

export const StackBroTSApp: React.FC = () => {
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
