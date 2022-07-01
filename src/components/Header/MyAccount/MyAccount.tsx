import React, { CSSProperties, FC } from 'react';
import { Avatar, Button, Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { getProfileState } from '../../../store/selectors/profile-selectors';
import { SubMenu } from './SubMenu/SubMenu';
import styles from './MyAccount.module.scss';

const BUTTON_INLINE_STYLES: CSSProperties = { height: 40, backgroundColor: 'transparent' };

export const MyAccount: FC = () => {
  const { ownerProfile } = useSelector(getProfileState);

  return (
    <div className={`${styles.wrapper} no-border`}>
      <Dropdown overlay={<SubMenu />}>
        <Button style={BUTTON_INLINE_STYLES}>
          <div className={styles.inner}>
            <span className={styles.login}>{ownerProfile?.fullName}</span>
            <Avatar src={ownerProfile?.photos?.large} icon={<UserOutlined />} />
          </div>
        </Button>
      </Dropdown>
    </div>
  );
};
