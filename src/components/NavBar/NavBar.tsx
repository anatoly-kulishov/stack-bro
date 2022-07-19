import React, { CSSProperties, FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Layout, Menu } from 'antd';
import { AndroidOutlined, MessageOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

import { getUsersTotalCount } from '../../store/selectors/users-selectors';
import { AppRouteKeys, AppRoutesEnum } from '../../shared/types';

const { Sider } = Layout;

const BADGE_INLINE_STYLES: CSSProperties = { backgroundColor: '#1890ff' };
const SIDER_WIDTH: number = 150;

const renderMenuItems = (totalUsersCount: number) => {
  const onSelectNavKey = (key: string) => {
    sessionStorage.setItem('nav_key', key);
  };

  return [
    {
      key: 'MyProfile',
      icon: <UserOutlined />,
      label: <Link to={AppRoutesEnum.HOME}>My profile</Link>,
      onClick: () => onSelectNavKey(AppRouteKeys.MY_PROFILE),
    },
    {
      key: 'Messenger',
      icon: <MessageOutlined />,
      label: <Link to={AppRoutesEnum.MESSENGER}>Messenger</Link>,
      onClick: () => onSelectNavKey(AppRouteKeys.MESSENGER),
    },
    {
      key: 'Users',
      icon: <TeamOutlined />,
      label: (
        <Link to={AppRoutesEnum.USERS}>
          <div className="NavBarRow">
            Users <Badge count={totalUsersCount} style={BADGE_INLINE_STYLES} />
          </div>
        </Link>
      ),
      onClick: () => onSelectNavKey(AppRouteKeys.USERS),
    },
    {
      key: 'Game',
      icon: <AndroidOutlined />,
      label: <Link to={AppRoutesEnum.GAME}>Game</Link>,
      onClick: () => onSelectNavKey(AppRouteKeys.GAME),
    },
  ];
};

export const NavBar: FC = memo(() => {
  const totalUsersCount = useSelector(getUsersTotalCount);
  const navKey: string = sessionStorage.getItem('nav_key') || AppRouteKeys.MY_PROFILE;

  return (
    <Sider collapsible width={SIDER_WIDTH}>
      <Menu
        items={renderMenuItems(totalUsersCount)}
        defaultSelectedKeys={[navKey]}
        className="default-box"
        mode="inline"
      />
    </Sider>
  );
});
