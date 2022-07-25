import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';
import { Empty } from 'antd';

import { ProfilePost } from './ProfilePost/ProfilePost';
import { getProfileState } from '../../../store/selectors/profile-selectors';
import { IPost } from '../../../shared/types/posts.types';
import styles from './ProfilePosts.module.scss';

export const ProfilePosts: FC = memo(() => {
  const { profile, posts } = useSelector(getProfileState);

  const postsElements = posts?.map(({ id, message, likesCount }: IPost) => (
    <ProfilePost key={id} profile={profile} message={message} likesCount={likesCount} />
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
});
