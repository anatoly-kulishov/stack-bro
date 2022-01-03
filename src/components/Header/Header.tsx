import React from 'react';
import {withRouter} from "react-router-dom";
import {useSelector} from "react-redux";
import {Layout} from "antd";
import styles from "./Header.module.scss";
import SearchPanel from "./SearchPanel";
import AudioPlayer from "./AudioPlayer";
import MyAccount from "./MyAccount";
import Logo from "./Logo";
import {getAppTheme} from "../../store/selectors/app-selectors";
import {isDarkTheme, isLightTheme} from "../../utils/boolean-helpers";

const Header: React.FC = () => {
    const appTheme = useSelector(getAppTheme);

    return (
        <Layout.Header
            className={`${styles.header} ${isLightTheme(appTheme) && styles.lightHeader} ${isDarkTheme(appTheme) && styles.darkHeader} site-layout-background`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-md-1 col-lg-2">
                        <Logo theme={appTheme}/>
                    </div>
                    <div className="d-none d-md-block col-md-3 col-lg-3">
                        <SearchPanel/>
                    </div>
                    <div className="d-none d-md-block col-md-5">
                        <AudioPlayer/>
                    </div>
                    <div className="col-6 col-md-3 col-lg-2">
                        <MyAccount theme={appTheme}/>
                    </div>
                </div>
            </div>
        </Layout.Header>
    );
}

export default withRouter(Header);
