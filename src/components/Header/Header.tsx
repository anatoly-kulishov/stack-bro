import React from 'react';
import {NavLink} from "react-router-dom";
import {Layout} from "antd";
import styles from "./Header.module.scss";
import SearchPanel from "./SearchPanel";
import AudioPlayer from "./AudioPlayer";
import MyAccount from "./MyAccount";
import Logo from "./Logo";

const Header: React.FC = () => {
    const {Header} = Layout;
    return (
        <Header className={`${styles.header} site-layout-background`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-md-1 col-lg-1">
                        <NavLink to="/profile">
                            <Logo/>
                        </NavLink>
                    </div>
                    <div className="d-none d-md-block col-md-4 col-lg-3">
                        <SearchPanel/>
                    </div>
                    <div className="d-none d-lg-block col-lg-5">
                        <AudioPlayer/>
                    </div>
                    <div className="col-6 col-md-7 col-lg-3">
                        <MyAccount/>
                    </div>
                </div>
            </div>
        </Header>
    );
}

export default Header;