import React, {useEffect} from 'react';
import {Layout} from "antd";
import styles from "./Header.module.scss";
import ProfileStatus from "./ProfileStatus";
import MainCover from "./MainCover";
import User from "./User";
import {IHeader} from "../../interfaces";

const Header: React.FC<IHeader> = props => {
    const {authMe, logOut} = props;
    const {Header} = Layout;

    useEffect(() => {
        authMe()
    }, [authMe])

    return (
        <Header className={`${styles.header} site-layout-background`} style={{padding: 0}}>
            <div>
                <MainCover/>
                <div className={`${styles.row}`}>
                    <ProfileStatus status="Hello World!"/>
                    <User logOut={logOut}/>
                </div>
            </div>
        </Header>
    );
}

export default Header;
