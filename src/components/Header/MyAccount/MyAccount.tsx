import React, {PropsWithChildren} from 'react';
import {Avatar, Dropdown, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import styles from "./MyAccount.module.scss";
import SubMenu from "./SubMenu";
import {ColorThemes, ProfileType} from "../../../types";
import {isDarkTheme} from "../../../utils/boolean-helpers";

type MyAccountPropsType = {
    theme: ColorThemes
    ownerProfile: PropsWithChildren<ProfileType>
    logOut: () => void
}

const MyAccount: React.FC<MyAccountPropsType> = ({logOut, theme, ownerProfile}) => {
    return (
        <div className={`${styles.wrapper} ${isDarkTheme(theme) ? styles.wrapperDarkTheme : ''} no-border`}>
            <Dropdown overlay={<SubMenu logOut={logOut} appTheme={theme}/>}>
                <Button style={{
                    height: 40,
                    backgroundColor: 'transparent',
                    color: isDarkTheme(theme) ? '#fff' : '#000'
                }}>
                    <div className={styles.inner}>
                        <span className={`${styles.login} mr-2`}>{ownerProfile.fullName}</span>
                        <Avatar src={ownerProfile.photos?.large} icon={<UserOutlined/>}/>
                    </div>
                </Button>
            </Dropdown>
        </div>
    );
}

export default MyAccount;
