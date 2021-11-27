import React, {FC, StrictMode, useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect, Provider, useSelector} from "react-redux";
import {compose} from "redux";
import store from "./store";
import {catchAllUnhandledErrors} from "./utils/errors-helpers";
import {getAppTheme} from "./store/selectors/app-selectors";
import {AppStateType} from "./store/reducers/rootReducer";
import {initializeApp} from "./store/actions/appActions";
import AppNavigation from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import './assets/styles/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import "./App.scss";

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = { initializeApp: (isAuth: boolean) => void };

const App: FC<MapPropsType & DispatchPropsType> = ({initialized, initializeApp, isAuth}) => {
  const appTheme = useSelector(getAppTheme);

  useEffect(() => {
    initializeApp(isAuth);
    window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    return () => {
      window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
    }
  }, [initializeApp, isAuth])

  return (
    <>
      {initialized && (
        <div className={`app--${appTheme}`}>
          {isAuth ? <AppNavigation/> : <AuthRoutes/>}
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
  isAuth: state.auth.isAuth
})

const AppContainer = compose<FC>(connect(mapStateToProps, {initializeApp}))(App);

const StackBroTSApp: FC = () => {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router>
          <AppContainer/>
        </Router>
      </Provider>
    </StrictMode>
  )
}

export default StackBroTSApp;


