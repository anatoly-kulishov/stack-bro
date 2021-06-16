import React, {useEffect} from 'react';
import "./App.scss";
import AppNavigation from "../../navigation/AppNavigation";
import AuthNavigation from "../../navigation/AuthNavigation";
import {IApp} from "../../interfaces";

const App: React.FC<IApp> = props => {
    const {isAuth, authMe} = props

    useEffect(() => {
        authMe()
    }, [authMe])

    return (
        <div className="app">
            {isAuth ? <AppNavigation/> : <AuthNavigation/>}
        </div>
    );
}

export default App;