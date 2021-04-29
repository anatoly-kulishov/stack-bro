import React from 'react';
import "./Header.css";
import logo from "../../images/logo.svg"

const Header = () => {
    return (
        <div className="app-header">
            <div className="app-header__wrapper">
                <img className="logo" src={logo} alt="StackBro"/>
            </div>
        </div>
    );
}

export default Header;