import React from 'react';
import "./App.scss";
import Header from "../Header";
import Navbar from "../Navbar";
import Profile from "../Profile";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header/>
            <div className="app-content container">
                <Navbar/>
                <Profile/>
            </div>
        </div>
    );
}

export default App;
