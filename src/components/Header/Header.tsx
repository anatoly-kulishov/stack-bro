import React from 'react';
import {Layout} from "antd";
import styles from "./Header.module.scss";
import ProfileStatus from "./ProfileStatus";
import MainCover from "./MainCover";
import User from "./User";
import {IHeader} from "../../interfaces";

const Header: React.FC<IHeader> = props => {
    const {logOut} = props;
    const {Header} = Layout;

    return (
        <Header className={`${styles.header} site-layout-background`} style={{padding: 0}}>
            <div>
                <MainCover/>
                <div className={`${styles.row}`}>
                    <ProfileStatus/>
                    <User logOut={logOut}/>
                </div>
            </div>
        </Header>
    );
}

export default Header;
