import React, { FC, PropsWithChildren } from 'react';
import { Avatar, Button, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { SubMenu } from './SubMenu/SubMenu';
import { ProfileType } from '../../../types';
import styles from './MyAccount.module.scss';

type MyAccountPropsType = {
  ownerProfile: PropsWithChildren<ProfileType>;
  logOut: () => void;
};

export const MyAccount: FC<MyAccountPropsType> = ({ logOut, ownerProfile }) => {
  return (
    <div className={`${styles.wrapper} no-border`}>
      <Dropdown overlay={<SubMenu logOut={logOut} />}>
        <Button
          style={{
            height: 40,
            backgroundColor: 'transparent',
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
