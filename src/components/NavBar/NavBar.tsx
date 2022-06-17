import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Layout, Menu } from 'antd';
import { AndroidOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

import { getUsersState } from '../../store/selectors/users-selectors';
import { AppRoutesEnum } from '../../types';
import styles from './NavBar.module.scss';

const { Sider } = Layout;

const renderMenuItems = (totalUsersCount: number) => {
  const onSelectNavKey = (key: string) => {
    sessionStorage.setItem('nav_key', key);
  };

  return [
    {
      key: 'MyProfile',
      icon: <UserOutlined />,
      label: <Link to={AppRoutesEnum.HOME}>My profile</Link>,
      onClick: () => onSelectNavKey('MyProfile'),
    },
    {
      key: 'Messenger',
      icon: <MessageOutlined />,
      label: <Link to={AppRoutesEnum.MESSENGER}>Messenger</Link>,
      onClick: () => onSelectNavKey('Messenger'),
    },
    {
      key: 'Users',
      icon: <TeamOutlined />,
      label: (
        <Link to={AppRoutesEnum.USERS}>
          <span className="NavBarRow">
            Users <Badge count={totalUsersCount} style={{ backgroundColor: '#1890ff' }} />
          </span>
        </Link>
      ),
      onClick: () => onSelectNavKey('Users'),
    },
    {
      key: 'Game',
      icon: <AndroidOutlined />,
      id: 'GameLink',
      label: <Link to={AppRoutesEnum.GAME}>Game</Link>,
      onClick: () => onSelectNavKey('Game'),
    },
  ];
};

export const NavBar: FC = () => {
  const { totalUsersCount } = useSelector(getUsersState);

  const navKey: string = sessionStorage.getItem('nav_key') || 'MyProfile';

  return (
    <Sider collapsible width={'100%'} className={styles.Sider}>
      <Menu
        items={renderMenuItems(totalUsersCount)}
        defaultSelectedKeys={[navKey]}
        className="default-box"
        mode="inline"
      />
    </Sider>
  );
};
