import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProfilePhoto } from './ProfilePhoto/ProfilePhoto';
import { ProfilePosts } from './ProfilePosts/ProfilePosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { MyFriends } from './MyFriends/MyFriends';
import { PostForm } from './PostForm/PostForm';
import { useActions } from '../../store';
import { getAuthState } from '../../store/selectors/auth-selectors';
import { getProfileState } from '../../store/selectors/profile-selectors';
import { profileActions } from '../../store/action-creators';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { setCurrentUserFollower, updateProfile } = useActions();
  const { userId } = useSelector(getAuthState);
  const { isOwner } = useSelector(getProfileState);
  const currentUserId = params.userId;

  useEffect(() => {
    // ToDo: Refactoring!
    if (currentUserId) {
      updateProfile(Number(currentUserId));
      setCurrentUserFollower(Number(currentUserId));
      dispatch(profileActions.setOwnerStatus(false));
    }
    // ToDo: Refactoring! profile.hasOwnProperty('userId')
    if (!currentUserId && userId) {
      updateProfile(userId);
      dispatch(profileActions.setOwnerStatus(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserId, userId, dispatch]);

  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-4 pr-lg-2">
          <ProfilePhoto />
          {isOwner && <MyFriends />}
        </div>
        <div className="col-12 col-lg-8 pl-lg-2">
          <ProfileInfo />
          {isOwner && <PostForm />}
          <ProfilePosts />
        </div>
      </div>
    </div>
  );
};
