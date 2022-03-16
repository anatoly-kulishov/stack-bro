import React, { FC, useEffect } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { ProfileInfo } from './ProfileInfo/ProfileInfo';
import { ProfilePhoto } from './ProfilePhoto/ProfilePhoto';
import { MyPosts } from './MyPosts/MyPosts';
import { updateProfile } from '../../store/actions/profileActions';
import { setCurrentUserFollower } from '../../store/actions/usersActions/usersActions';
import MyFriends from './MyFriends/MyFriends';
import { getAuthState } from '../../store/selectors/auth-selectors';
import { getProfileState } from '../../store/selectors/profile-selectors';
import { setOwnerStatus } from '../../store/action-creators';

type PathParamsType = {
  userId?: string;
};

export const Profile: FC<RouteComponentProps<PathParamsType>> = ({ match }) => {
  const dispatch = useDispatch();
  const currentUserId = match?.params?.userId;
  const authState = useSelector(getAuthState);
  const { isOwner } = useSelector(getProfileState);

  useEffect(() => {
    if (currentUserId) {
      dispatch(updateProfile(Number(currentUserId)));
      dispatch(setCurrentUserFollower(Number(currentUserId)));
      dispatch(setOwnerStatus(false));
    }
    if (!currentUserId && authState.userId) {
      dispatch(updateProfile(authState.userId));
      dispatch(setOwnerStatus(true));
    }
  }, [currentUserId, authState.userId, dispatch]);

  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-4 pr-lg-2">
          <ProfilePhoto />
          {isOwner && <MyFriends />}
        </div>
        <div className="col-12 col-lg-8 pl-lg-2">
          <ProfileInfo />
          {isOwner && <MyPosts />}
        </div>
      </div>
    </div>
  );
};

export const ProfileWithRouter = withRouter(Profile);
