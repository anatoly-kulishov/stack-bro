import React from 'react';
import "./App.css";
import hero from "../../images/hero.jpg";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "../Sidebar";

const App = () => {
    return (
        <div className="app">
            <Header/>
            <Sidebar/>
            <div className="app-content">
                <div className="main-hero">
                    <img className="main-hero__image"
                         src={hero}
                         alt=""/>
                </div>
                <div>
                    ava + description
                </div>
                <div>
                    my posts
                    <div>
                        new posts
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default App;
