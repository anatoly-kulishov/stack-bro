import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { UserType } from '../../../../types';
import classes from './Friend.module.scss';

type FriendPropsType = {
  data: UserType;
};

export const Friend: React.FC<FriendPropsType> = ({ data }) => {
  return (
    <li>
      <Link to={`/${data.id}`}>
        <Avatar src={data?.photos?.large} icon={<UserOutlined />} size={50} />
        <span className={classes.friendName}>{data.name}</span>
      </Link>
    </li>
  );
};
