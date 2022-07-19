import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { LogoutOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import { AppRoutesEnum } from '../../../../shared/types';
import { useActions } from '../../../../store';

const renderMenuItems = (logOut: () => void) => [
  {
    key: 'Help',
    icon: <QuestionCircleOutlined />,
    label: <NavLink to={AppRoutesEnum.HELP}>Help</NavLink>,
  },
  {
    key: 'SignOut',
    icon: <LogoutOutlined />,
    label: 'Sign out',
    onClick: () => logOut(),
  },
];

export const SubMenu: FC = () => {
  const { logOut } = useActions();

  return <Menu items={renderMenuItems(logOut)} mode="inline" />;
};
