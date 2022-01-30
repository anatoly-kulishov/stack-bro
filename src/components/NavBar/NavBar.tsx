import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { MessageOutlined, TeamOutlined, UserOutlined, FileOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { getUsersState } from '../../store/selectors/users-selectors';
import { getAppState } from '../../store/selectors/app-selectors';

const { Sider } = Layout;

export const NavBar: FC = () => {
  const { totalUsersCount } = useSelector(getUsersState);
  const { theme } = useSelector(getAppState);

  const onSelectNavKey = (key: number) => {
    sessionStorage.setItem('nav_key', String(key));
  };
  const navKey: string = sessionStorage.getItem('nav_key') || '1';

  return (
    <Sider collapsible width={150}>
      <Menu defaultSelectedKeys={[navKey]} theme={theme} className={`default-box--${theme}`} mode="inline">
        <Menu.Item key="1" onClick={() => onSelectNavKey(1)} icon={<UserOutlined />}>
          <Link to="/">My profile</Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => onSelectNavKey(2)} icon={<FileOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => onSelectNavKey(3)} icon={<MessageOutlined />}>
          <Link to="/messenger">Messenger</Link>
        </Menu.Item>
        <Menu.Item key="4" onClick={() => onSelectNavKey(4)} icon={<TeamOutlined />}>
          <Link to="/users">
            Users <small>({totalUsersCount})</small>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
