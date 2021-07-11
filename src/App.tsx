import React, {StrictMode} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Spin} from "antd";
import "./App.scss";
import store from "./store";
import {AppPropsType} from "./types/props-types";
import AppNavigation from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import {catchAllUnhandledErrors} from "./utils/helpers/errors-helpers";
import {initializeApp} from "./store/actions/appActions";

class App extends React.Component<AppPropsType> {

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
    }

    render() {
        return (
            <>
                {!this.props.initialized && <div className="d-center"><Spin size="large"/></div>}
                {this.props.initialized && (
                    <div className="app">
                        {this.props.isAuth ? <AppNavigation/> : <AuthRoutes/>}
                    </div>
                )}
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    initialized: state.app.initialized,
    isAuth: state.auth.isAuth
})

const AppContainer = compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}))(App);

const StackBroTSApp = () => {
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


