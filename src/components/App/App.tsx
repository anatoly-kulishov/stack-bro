import React from 'react';
import "./App.scss";
import AppNavigation from "../../navigation/AppNavigation";
import Header from "../Header";
import Navbar from "../Navbar";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header/>
            <main className="app-main container">
                <Navbar/>
                <div className="app-content">
                    <AppNavigation/>
                </div>
            </main>
        </div>
    );
}

export default App;
