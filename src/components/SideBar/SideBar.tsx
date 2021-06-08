import React from 'react';
import {NavLink} from "react-router-dom";
import {Avatar, Layout, Menu} from "antd";
import {
    MessageOutlined,
    TeamOutlined,
    UserOutlined,
    FileOutlined,
    AudioOutlined,
    SettingOutlined
} from '@ant-design/icons';
import {ISideBar} from "../../interfaces";

const SideBar: React.FC<ISideBar> = props => {
    const {profile} = props;
    const {Sider} = Layout;

    return (
        <Sider collapsible>
            <div className="logo">
                {profile && (
                    <>
                        <Avatar size={50} src={profile.photos.large && profile.photos.large} icon={<UserOutlined/>}/>
                        <b style={{color: "#fff", letterSpacing: '-.7px'}}>{profile.fullName}</b>
                    </>
                )}
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <Menu.Item key="1" icon={<UserOutlined/>}>
                    <NavLink to="/">
                        Profile
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" icon={<MessageOutlined/>}>
                    <NavLink to="/dialogs">
                        Dialogs
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" icon={<TeamOutlined/>}>
                    <NavLink to="/users">
                        Users
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4" icon={<FileOutlined/>}>
                    <NavLink to="/news">
                        News
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5" icon={<AudioOutlined/>}>
                    <NavLink to="/music">
                        Music
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="6" icon={<SettingOutlined/>}>
                    <NavLink to="/settings">
                        Settings
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default SideBar;
