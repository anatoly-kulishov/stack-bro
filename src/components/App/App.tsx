import React from 'react';
import {connect} from "react-redux";
import {compose} from "redux";
import {Spin} from "antd";
import "./App.scss";
import AppNavigation from "../../navigation/AppNavigation";
import AuthNavigation from "../../navigation/AuthNavigation";
import {initializeApp} from "../../store/actions/appActions";
import {IApp} from "../../interfaces";

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
                        {this.props.isAuth ? <AppNavigation/> : <AuthNavigation/>}
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

export default compose<React.ComponentType>(connect(mapStateToProps, {initializeApp}))(App);



