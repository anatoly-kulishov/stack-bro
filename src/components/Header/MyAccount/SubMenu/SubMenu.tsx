import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { LogoutOutlined, QuestionCircleOutlined } from '@ant-design/icons';

import { useActions } from '../../../../store';

export const SubMenu: FC = () => {
  const { logOut } = useActions();

  return (
    <Menu>
      <Menu.Item key="1" icon={<QuestionCircleOutlined />}>
        <NavLink to="/help">Help</NavLink>
      </Menu.Item>
      <Menu.Item key="2" onClick={logOut} icon={<LogoutOutlined />}>
        Sign out
      </Menu.Item>
    </Menu>
  );
};
