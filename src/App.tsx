import React, {StrictMode, useEffect} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Spin} from "antd";
import "./App.scss";
import store from "./store";
import AppNavigation from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import {catchAllUnhandledErrors} from "./utils/helpers/errors-helpers";
import {initializeApp} from "./store/actions/appActions";
import {AppStateType} from "./store/reducers/rootReducer";

type MapPropsType = ReturnType<typeof mapStateToProps>;
type DispatchPropsType = { initializeApp: () => void };

const App: React.FC<MapPropsType & DispatchPropsType> = props => {
    const {initialized, initializeApp, isAuth} = props;

    useEffect(() => {
        initializeApp();
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        }
    }, [initializeApp])

    return (
        <>
            {!initialized && <div className="d-center"><Spin size="large"/></div>}
            {initialized && (
                <div className="app">
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

const AppContainer = compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}))(App);

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


