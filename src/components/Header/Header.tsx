import React, {useEffect} from 'react';
// import styles from "./Header.module.scss";
// import MainCover from "./MainCover";
// import Avatar from "./Avatar";
// import User from "./User";
import {IHeader} from "../../interfaces";
import {Layout} from "antd";

const Header: React.FC<IHeader> = props => {
    const {authMe, login, logOut} = props;
    const {Header} = Layout;


    useEffect(() => {
        authMe()
    }, [authMe])

    return (
        <Header className="site-layout-background" style={{padding: 0}}/>
        // <div>
        //     <MainCover/>
        //     <div className={`${styles.row} container`}>
        //         <Avatar/>
        //         <User login={login} logOut={logOut}/>
        //     </div>
        // </div>
    );
}

export default Header;
