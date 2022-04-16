import React, { FC, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { FileField } from '../../common/FileField/FileField';
import { getProfileState } from '../../../store/selectors/profile-selectors';
import { userFollow, userUnfollow } from '../../../store/actions/usersActions/usersActions';
import { savePhoto } from '../../../store/actions/profileActions';
import { Nullable } from '../../../types';
import styles from './ProfileActions.module.scss';

type ProfileActionsPropsType = {
  followState: Nullable<boolean>;
  setFollowState: (followStatus: Nullable<boolean>) => void;
};

export const ProfileActions: FC<ProfileActionsPropsType> = ({ followState, setFollowState }) => {
  const dispatch = useDispatch();
  const { profile, followStatus, isOwner } = useSelector(getProfileState);
  const [errorText, setErrorText] = useState<Nullable<string>>(null);

  useEffect(() => {
    setFollowState(followStatus);
  }, [followStatus, setFollowState]);

  const followHandler = () => {
    if (profile.userId) {
      dispatch(userFollow(profile.userId));
    }
  };

  const unfollowHandler = () => {
    if (profile.userId) {
      dispatch(userUnfollow(profile.userId));
    }
  };

  return (
    <div className={styles.profileActions}>
      {isOwner && <FileField saveHandler={savePhoto} validationHandler={setErrorText} />}
      {errorText && <div className={styles.errorText}>{errorText}</div>}
      {!isOwner && !followState && (
        <Button onClick={followHandler} htmlType="button" block type="primary" disabled={!profile.userId}>
          Add friend
        </Button>
      )}
      {!isOwner && followState && (
        <Button onClick={unfollowHandler} htmlType="button" block danger disabled={!profile.userId}>
          Unfriend
        </Button>
      )}
    </div>
  );
};