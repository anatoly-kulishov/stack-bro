import React from 'react';
import {NavLink} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    MessageOutlined,
    TeamOutlined,
    UserOutlined,
    FileOutlined,
    AudioOutlined,
} from '@ant-design/icons';
import {INavBar} from "../../interfaces";

const NavBar: React.FC<INavBar> = () => {
    const {Sider} = Layout;

    return (
        <Sider collapsible width={150}>
            <Menu defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <NavLink to="/">
                        My profile
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<FileOutlined/>}>
                    <NavLink to="/news">
                        News
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<MessageOutlined/>}>
                    <NavLink to="/dialogs">
                        Messenger
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4" icon={<TeamOutlined/>}>
                    <NavLink to="/users">
                        Users
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5" icon={<AudioOutlined/>}>
                    <NavLink to="/music">
                        Music
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default NavBar;
