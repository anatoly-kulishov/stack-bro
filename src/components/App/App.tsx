import React, {} from 'react';
import {useSelector} from "react-redux";
import "./App.scss";
import AppNavigation from "../../navigation/AppNavigation";
import AuthNavigation from "../../navigation/AuthNavigation";

const App: React.FC = () => {
    const isAuth: boolean = useSelector((state: any) => state.auth.token)

    return (
        <div className="app">
            {isAuth ? <AppNavigation/> : <AuthNavigation/>}
        </div>
    );
}

export default App;
