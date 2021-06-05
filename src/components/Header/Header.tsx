import React, {useEffect} from 'react';
import styles from "./Header.module.scss";
import MainCover from "./MainCover";
import Avatar from "./Avatar";
import User from "./User";
import {IHeader} from "../../interfaces";

const Header: React.FC<IHeader> = props => {
    const {authMe, login, logOut} = props;

    useEffect(() => {
        authMe()
    }, [authMe])

    return (
        <div>
            <MainCover/>
            <div className={`${styles.row} container`}>
                <Avatar/>
                <User login={login} logOut={logOut}/>
            </div>
        </div>
    );
}

export default Header;
