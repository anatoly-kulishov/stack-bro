import React from 'react';
import {NavLink} from "react-router-dom";
import {Menu} from 'antd';
import {LogoutOutlined, SettingOutlined, QuestionCircleOutlined} from '@ant-design/icons';
import {MyAccountSubMenuType} from "../../../../types/types";

const SubMenu: React.FC<MyAccountSubMenuType> = props => {
    const {logOut} = props;
    return (
        <Menu>
            <Menu.Item key="1" icon={<SettingOutlined/>}>
                <NavLink to="/settings">
                    Settings
                </NavLink>
            </Menu.Item>
            <Menu.Item key="2" icon={<QuestionCircleOutlined/>}>
                <NavLink to="/help">
                    Help
                </NavLink>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => logOut()} icon={<LogoutOutlined/>}>
                Sign out
            </Menu.Item>
        </Menu>
    );
}

export default SubMenu;
