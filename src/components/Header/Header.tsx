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
import ThemeToggler from "../common/ThemeToggler/ThemeToggler";

type HeaderPropsType = {}

const Header: React.FC<HeaderPropsType> = () => {
    const {Header} = Layout
    const appTheme = useSelector(getAppTheme);

    return (
        <Header
            className={`${styles.header} ${isLightTheme(appTheme) && styles.lightHeader} ${isDarkTheme(appTheme) && styles.darkHeader} site-layout-background`}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-6 col-md-1 col-lg-1">
                        <ThemeToggler>
                            <Logo/>
                        </ThemeToggler>
                    </div>
                    <div className="d-none d-md-block col-md-4 col-lg-3">
                        <SearchPanel/>
                    </div>
                    <div className="d-none d-lg-block col-lg-4">
                        <AudioPlayer/>
                    </div>
                    <div className="col-6 col-md-7 col-lg-4">
                        <MyAccount/>
                    </div>
                </div>
            </div>
        </Header>
    );
}

export default withRouter(Header);
