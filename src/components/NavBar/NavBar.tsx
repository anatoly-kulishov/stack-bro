import React from 'react';
import {NavLink} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    MessageOutlined,
    TeamOutlined,
    UserOutlined,
    FileOutlined,
    CodeSandboxOutlined
} from '@ant-design/icons';
import {useSelector} from "react-redux";
import {getTotalUsersCount} from "../../store/selectors/users-selectors";

const NavBar: React.FC = () => {
    const {Sider} = Layout;
    const userCounter = useSelector<any>(state => getTotalUsersCount(state))

    const onSelectNavKey = (key: number) => {
        sessionStorage.setItem('nav_key', String(key));
    }
    const navKey: string = sessionStorage.getItem('nav_key') || '1';

    return (
        <Sider collapsible width={150}>
            <Menu defaultSelectedKeys={[navKey]}
                  mode="inline">
                <Menu.Item key="1" onClick={() => onSelectNavKey(1)} icon={<UserOutlined/>}>
                    <NavLink to="/profile">
                        My profile
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="2" onClick={() => onSelectNavKey(2)} icon={<FileOutlined/>}>
                    <NavLink to="/news">
                        News
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="3" onClick={() => onSelectNavKey(3)} icon={<MessageOutlined/>}>
                    <NavLink to="/dialogs">
                        Messenger
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="4" onClick={() => onSelectNavKey(4)} icon={<TeamOutlined/>}>
                    <NavLink to="/users">
                        Users <small>({userCounter})</small>
                    </NavLink>
                </Menu.Item>
                <Menu.Item key="5" onClick={() => onSelectNavKey(5)} icon={<CodeSandboxOutlined/>}>
                    <NavLink to="/sandbox">
                        Sandbox
                    </NavLink>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default NavBar;
