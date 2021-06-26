import React, {StrictMode} from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {Spin} from "antd";
import "./App.scss";
import store from "./store";
import {IApp} from "./interfaces";
import AppNavigation from "./routes/AppRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import {initializeApp} from "./store/actions/appActions";

class App extends React.Component<IApp> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <div className="d-center"><Spin size="large"/></div>
        }
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


