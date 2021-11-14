import React, {FC, StrictMode, useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect, Provider, useSelector} from "react-redux";
import {compose} from "redux";
import './assets/styles/bootstrap-grid.min.css';
import 'antd/dist/antd.css';
import "./App.scss";
import store from "./store";
import AppNavigation from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import {catchAllUnhandledErrors} from "./utils/errors-helpers";
import {initializeApp} from "./store/actions/appActions";
import {AppStateType} from "./store/reducers/rootReducer";
import {getAppTheme} from "./store/selectors/app-selectors";

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

const AppContainer = compose<any>(connect(mapStateToProps, {initializeApp}))(App);

const StackBroTSApp: React.FC = () => {
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


