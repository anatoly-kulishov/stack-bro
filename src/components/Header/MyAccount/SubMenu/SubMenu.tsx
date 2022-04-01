import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { LogoutOutlined, QuestionCircleOutlined } from '@ant-design/icons';

type MyAccountSubMenuPropsType = {
  logOut: () => void;
};

export const SubMenu: FC<MyAccountSubMenuPropsType> = ({ logOut }) => {
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
