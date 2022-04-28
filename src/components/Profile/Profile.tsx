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
import { updateProfile } from '../../store/actions_old/profileActions';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { setCurrentUserFollower, setOwnerStatus } = useActions();
  const { userId } = useSelector(getAuthState);
  const { isOwner } = useSelector(getProfileState);
  const currentUserId = params.userId;

  useEffect(() => {
    // ToDo: Refactoring!
    if (currentUserId) {
      dispatch(updateProfile(Number(currentUserId)));
      setCurrentUserFollower(Number(currentUserId));
      setOwnerStatus(false);
    }
    // ToDo: Refactoring! profile.hasOwnProperty('userId')
    if (!currentUserId && userId) {
      dispatch(updateProfile(userId));
      setOwnerStatus(true);
    }
  }, [currentUserId, userId]);

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
