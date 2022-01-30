import React, { PropsWithChildren } from 'react';
import { Avatar, Dropdown, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { SubMenu } from './SubMenu/SubMenu';
import { ColorThemes, ProfileType } from '../../../types';
import { isDarkTheme } from '../../../utils/boolean-helpers';
import styles from './MyAccount.module.scss';

type MyAccountPropsType = {
  theme: ColorThemes;
  ownerProfile: PropsWithChildren<ProfileType>;
  logOut: () => void;
};

export const MyAccount: React.FC<MyAccountPropsType> = ({ logOut, theme, ownerProfile }) => {
  return (
    <div className={`${styles.wrapper} ${isDarkTheme(theme) ? styles.wrapperDarkTheme : ''} no-border`}>
      <Dropdown overlay={<SubMenu logOut={logOut} appTheme={theme} />}>
        <Button
          style={{
            height: 40,
            backgroundColor: 'transparent',
            color: isDarkTheme(theme) ? '#fff' : '#000',
          }}
        >
          <div className={styles.inner}>
            <span className={`${styles.login} mr-2`}>{ownerProfile?.fullName}</span>
            <Avatar src={ownerProfile?.photos?.large} icon={<UserOutlined />} />
          </div>
        </Button>
      </Dropdown>
    </div>
  );
};
