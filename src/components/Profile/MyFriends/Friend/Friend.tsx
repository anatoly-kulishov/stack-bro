import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import { UserType } from '../../../../types';
import classes from './Friend.module.scss';

type FriendPropsType = {
  data: UserType;
};

export const Friend: FC<FriendPropsType> = ({ data }) => {
  return (
    <li>
      <Link to={`/${data.id}`} title={data.name}>
        <Avatar src={data?.photos?.large} icon={<UserOutlined />} size={50} />
        <span className={classes.friendName}>{data.name}</span>
      </Link>
    </li>
  );
};
