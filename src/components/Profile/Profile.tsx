import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ProfilePostForm } from './ProfilePostForm/ProfilePostForm';
import { ProfileFriends } from './ProfileFriends/ProfileFriends';
import { ProfilePhoto } from './ProfilePhoto/ProfilePhoto';
import { ProfilePosts } from './ProfilePosts/ProfilePosts';
import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { getProfileIsOwner } from '../../store/selectors/profile-selectors';
import { getAuthUserId } from '../../store/selectors/auth-selectors';
import { profileActions } from '../../store/action-creators';
import { useActions } from '../../store';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { setCurrentUserFollower, updateProfile } = useActions();
  const isOwner = useSelector(getProfileIsOwner);
  const userId = useSelector(getAuthUserId);
  const currentUserId = params.userId;

  useEffect(() => {
    if (currentUserId) {
      updateProfile(Number(currentUserId));
      setCurrentUserFollower(Number(currentUserId));
      dispatch(profileActions.setOwnerStatus(false));
    }
    if (!currentUserId && userId) {
      updateProfile(userId);
      dispatch(profileActions.setOwnerStatus(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserId, userId, dispatch]);

  return (
    <div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-4 pr-lg-2 pb-3 pb-lg-0">
          <ProfilePhoto />
          {isOwner && <ProfileFriends />}
        </div>
        <div className="col-12 col-md-12 col-lg-8 pl-lg-2">
          <ProfileInfo />
          {isOwner && <ProfilePostForm />}
          <ProfilePosts />
        </div>
      </div>
    </div>
  );
};
