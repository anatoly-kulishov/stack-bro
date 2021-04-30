import React from 'react';
import "./App.scss";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <div className="app-content container">
                <Sidebar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
