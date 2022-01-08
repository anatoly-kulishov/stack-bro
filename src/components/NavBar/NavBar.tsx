import React, {FC, memo} from 'react';
import {Link} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    MessageOutlined,
    TeamOutlined,
    UserOutlined,
    FileOutlined,
} from '@ant-design/icons';
import {useSelector} from "react-redux";
import {getTotalUsersCount} from "../../store/selectors/users-selectors";
import {getAppTheme} from "../../store/selectors/app-selectors";

const {Sider} = Layout;

const NavBar: FC = () => {
    const userCounter = useSelector(getTotalUsersCount);
    const appTheme = useSelector(getAppTheme);

    const onSelectNavKey = (key: number) => {
        sessionStorage.setItem('nav_key', String(key));
    }
    const navKey: string = sessionStorage.getItem('nav_key') || '1';

    return (
        <Sider collapsible width={150}>
            <Menu defaultSelectedKeys={[navKey]}
                  theme={appTheme}
                  className={`default-box--${appTheme}`}
                  mode="inline">
                <Menu.Item key="1" onClick={() => onSelectNavKey(1)} icon={<UserOutlined/>}>
                    <Link to="/">
                        My profile
                    </Link>
                </Menu.Item>
                <Menu.Item key="2" onClick={() => onSelectNavKey(2)} icon={<FileOutlined/>}>
                    <Link to="/news">
                        News
                    </Link>
                </Menu.Item>
                <Menu.Item key="3" onClick={() => onSelectNavKey(3)} icon={<MessageOutlined/>}>
                    <Link to="/messenger">
                        Messenger
                    </Link>
                </Menu.Item>
                <Menu.Item key="4" onClick={() => onSelectNavKey(4)} icon={<TeamOutlined/>}>
                    <Link to="/users">
                        Users <small>({userCounter})</small>
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default memo(NavBar);
