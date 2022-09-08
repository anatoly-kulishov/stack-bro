import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Card, Skeleton } from 'antd';
import { EyeOutlined, MinusOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';

import { IUserType } from '../../../../shared/types/user.types';
import { useActions } from '../../../../store';
import styles from './User.module.scss';

interface IUser {
  user: IUserType;
  isLoading: boolean;
}

const { Meta } = Card;

export const User: FC<IUser> = ({ user, isLoading }) => {
  const { userFollow, userUnfollow } = useActions();
  // const followingInProgress = useSelector(getFollowingInProgress);

  const followAction = user.followed ? (
    <MinusOutlined key="edit" onClick={() => userUnfollow(user.id)} />
  ) : (
    <PlusOutlined key="edit" onClick={() => userFollow(user.id)} />
  );

  return (
    <div key={user.id} className={`${styles.user} UserCardWrap`}>
      <Card
        className={styles.userCard}
        actions={[
          <NavLink to={`/${user.id}`} key={user.id}>
            <EyeOutlined />
          </NavLink>,
          followAction,
        ]}
      >
        <Skeleton loading={isLoading} avatar active>
          <Meta
            avatar={<Avatar src={user.photos.small && user.photos.small} icon={<UserOutlined />} />}
            title={user.name}
          />
        </Skeleton>
      </Card>
    </div>
  );
};
