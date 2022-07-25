import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { IUserType } from '../../../../shared/types/user.types';
import styles from './ProfileFriend.module.scss';

interface IFriend {
  data: IUserType;
}

export const ProfileFriend: FC<IFriend> = ({ data }) => {
  return (
    <li>
      <Link to={`/${data.id}`} title={data.name}>
        <Avatar src={data?.photos?.large} icon={<UserOutlined />} size={50} />
        <span className={styles.friendName}>{data.name}</span>
      </Link>
    </li>
  );
};
