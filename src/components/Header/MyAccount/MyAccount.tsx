import React, {PropsWithChildren} from 'react';
import {useSelector} from "react-redux";
import {Avatar, Dropdown, Button} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import styles from "./MyAccount.module.scss";
import SubMenu from "./SubMenu";
import {ProfileType} from "../../../types";
import {getAppTheme} from "../../../store/selectors/app-selectors";
import {isLightTheme} from "../../../utils/boolean-helpers";

type MyAccountPropsType = {
    ownerProfile: PropsWithChildren<ProfileType>,
    logOut: () => void
}

const MyAccount: React.FC<MyAccountPropsType> = ({logOut, ownerProfile}) => {
    const appTheme = useSelector(getAppTheme);

    return (
        <div className={`${styles.wrapper} no-border`}>
            <Dropdown overlay={<SubMenu logOut={logOut}/>}>
                <Button style={{
                    height: 40,
                    backgroundColor: 'transparent',
                    color: isLightTheme(appTheme) ? '#000' : '#fff'
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
