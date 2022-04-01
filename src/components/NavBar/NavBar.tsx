import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Layout, Menu } from 'antd';
import { MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

import { getUsersState } from '../../store/selectors/users-selectors';

const { Sider } = Layout;

export const NavBar: FC = () => {
  const { totalUsersCount } = useSelector(getUsersState);

  const onSelectNavKey = (key: number) => {
    sessionStorage.setItem('nav_key', String(key));
  };
  const navKey: string = sessionStorage.getItem('nav_key') || '1';

  return (
    <Sider collapsible width={150}>
      <Menu defaultSelectedKeys={[navKey]} className="default-box" mode="inline">
        <Menu.Item key="1" onClick={() => onSelectNavKey(1)} icon={<UserOutlined />}>
          <Link to="/">My profile</Link>
        </Menu.Item>
        <Menu.Item key="2" onClick={() => onSelectNavKey(3)} icon={<MessageOutlined />}>
          <Link to="/messenger">Messenger</Link>
        </Menu.Item>
        <Menu.Item key="3" onClick={() => onSelectNavKey(4)} icon={<TeamOutlined />}>
          <Link to="/users">
            <div className="NavBarRow">
              Users <Badge count={totalUsersCount} style={{ backgroundColor: '#1890ff' }} />
            </div>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
