import React from 'react';
import styles from "./Header.module.scss";
import MainCover from "./MainCover";
import Avatar from "./Avatar";
import User from "./User";

const Header: React.FC = () => {
    return (
        <div>
            <MainCover/>
            <div className={`${styles.row} container`}>
                <Avatar/>
                <User/>
            </div>
        </div>
    );
}

export default Header;
