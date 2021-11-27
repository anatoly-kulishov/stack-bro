import React, {FC, memo} from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Layout, Menu} from "antd";
import {
    MessageOutlined,
    TeamOutlined,
    UserOutlined,
    FileOutlined,
    CodeSandboxOutlined
} from '@ant-design/icons';
import {getTotalUsersCount} from "../../store/selectors/users-selectors";
import {getAppTheme} from "../../store/selectors/app-selectors";

const {Sider} = Layout;

const NavBar: FC = () => {
    const userCounter = useSelector(getTotalUsersCount);
    const appTheme = useSelector(getAppTheme);

    const createSelectNavKey = (key: number) => () => {
        sessionStorage.setItem('nav_key', String(key));
    }
    const navKey: string = sessionStorage.getItem('nav_key') || '1';

    return (
        <Sider collapsible width={150}>
            <Menu defaultSelectedKeys={[navKey]}
                  theme={appTheme}
                  className={`default-box--${appTheme}`}
                  mode="inline">
                <Menu.Item key="1" onClick={createSelectNavKey(1)} icon={<UserOutlined/>}>
                    <Link to="/">
                        My profile
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" onClick={createSelectNavKey(2)} icon={<FileOutlined/>}>
                    <Link to="/news">
                        News
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" onClick={createSelectNavKey(3)} icon={<MessageOutlined/>}>
                    <Link to="/messenger">
                        Messenger
                    </Link>
                </Menu.Item>
                <Menu.Item key="4" onClick={createSelectNavKey(4)} icon={<TeamOutlined/>}>
                    <Link to="/users">
                        Users <small>({userCounter})</small>
                    </Link>
                </Menu.Item>
                <Menu.Item key="5" onClick={createSelectNavKey(5)} icon={<CodeSandboxOutlined/>}>
                    <Link to="/sandbox">
                        Sandbox
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default memo(NavBar);
