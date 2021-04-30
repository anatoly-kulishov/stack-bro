import React from 'react';
import "./Header.scss";
import avatar from '../../images/avatar.jpg'
import MainCover from "../MainCover";

const Header = () => {
    return (
        <div className="app-header">
            <MainCover/>
            <div className="app-header__inner container">
                <div>
                    <img className="avatar" src={avatar} alt="Кулишов Анатолий"/>
                </div>
                <div className="user">
                    <div className="user__info">Кулишов Анатолий</div>
                    <div className="user__control">
                        <button className="btn">Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
