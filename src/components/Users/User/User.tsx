import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { Avatar, Card, Skeleton } from 'antd';
import { EyeOutlined, MinusOutlined, PlusOutlined, UserOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

import { UserType } from '../../../types';
import styles from './User.module.scss';
import { userFollow, userUnfollow } from '../../../store/actions/usersActions/usersActions';

export type UserPropsType = {
  user: UserType;
  isLoading: boolean;
};

export const User: FC<UserPropsType> = props => {
  const { user, isLoading } = props;
  const dispatch = useDispatch();
  const { Meta } = Card;
  // const followingInProgress = useSelector(getFollowingInProgress);

  const followAction = user.followed ? (
    <MinusOutlined key="edit" onClick={() => dispatch(userUnfollow(user.id))} />
  ) : (
    <PlusOutlined key="edit" onClick={() => dispatch(userFollow(user.id))} />
  );

  return (
    <div key={user.id} className={styles.user}>
      <Card
        style={{ width: 300, marginTop: 16 }}
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
            description={user.status}
          />
        </Skeleton>
      </Card>
    </div>
  );
};
