import React, {useEffect} from 'react';
import styles from "./Header.module.scss";
import MainCover from "./MainCover";
import Avatar from "./Avatar";
import User from "./User";

type IHeader = {
    authMe: Function,
    login: string
}

const Header: React.FC<IHeader> = ({authMe, login}) => {

    useEffect(() => {
        authMe()
    }, [authMe])

    return (
        <div>
            <MainCover/>
            <div className={`${styles.row} container`}>
                <Avatar/>
                <User login={login}/>
            </div>
        </div>
    );
}

export default Header;
