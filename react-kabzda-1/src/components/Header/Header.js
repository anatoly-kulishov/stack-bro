import React from 'react';
import "./Header.css";
import avatar from '../../images/avatar.jpg'

const Header = () => {
    return (
        <div className="app-header">
            <img className="avatar" src={avatar} alt="Кулишов Анатолий"/>
            <span>Кулишов Анатолий</span>
            <button className="btn">Выйти</button>
        </div>
    );
}

export default Header;
