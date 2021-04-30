import React from 'react';
import "./App.css";
import MainCover from "../MainCover";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";

const App = () => {
    return (
        <div className="app">
            <MainCover/>
            <div className="app-content">
                <Header/>
                <Sidebar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
