import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Empty } from 'antd';

import { Post } from './Post/Post';
import { getProfileState } from '../../../store/selectors/profile-selectors';
import { PostType } from '../../../types';
import styles from './ProfilePosts.module.scss';

export const ProfilePosts: FC = () => {
  const { profile, posts } = useSelector(getProfileState);

  const postsElements = posts?.map(({ id, message, likesCount }: PostType) => (
    <Post key={id} profile={profile} message={message} likesCount={likesCount} />
  ));

  return (
    <div className={`${styles.profilePosts} default-box profilePostsBox`}>
      <div>
        {postsElements.length ? (
          postsElements
        ) : (
          <div className={styles.profilePostsIsEmpty}>
            <Empty description="There are no posts here yet" />
          </div>
        )}
      </div>
    </div>
  );
};
