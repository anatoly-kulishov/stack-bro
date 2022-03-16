import React, { FC, useEffect, useState } from 'react';
import { Alert, Button, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ProfilePhoto.module.scss';
import { FileField } from '../../common/FileField/FileField';
import { Nullable } from '../../../types';
import { getProfileState } from '../../../store/selectors/profile-selectors';
import { userFollow, userUnfollow } from '../../../store/actions/usersActions/usersActions';
import { savePhoto } from '../../../store/actions/profileActions';
import { getAppState } from '../../../store/selectors/app-selectors';
import no_photo from './no_photo.png';

const { ErrorBoundary } = Alert;

export const ProfilePhoto: FC = () => {
  const dispatch = useDispatch();
  const { profile, isLoading, followStatus, isOwner } = useSelector(getProfileState);
  const { theme } = useSelector(getAppState);

  const [profilePhoto, setProfilePhoto] = useState<Nullable<string>>();
  const [followState, setFollowState] = useState<Nullable<boolean>>(followStatus);
  const [errorText, setErrorText] = useState<Nullable<string>>(null);

  useEffect(() => {
    setProfilePhoto(profile.photos?.large);
  }, [profile]);

  useEffect(() => {
    setFollowState(followStatus);
  }, [followStatus]);

  return (
    <div className={`${styles.wrapper} default-box default-box--${theme}`}>
      <ErrorBoundary>
        <div className={styles.profilePhoto}>
          {isLoading && (
            <div className={styles.spinBox}>
              <Spin size="large" />
            </div>
          )}
          {!isLoading && <img src={profilePhoto || no_photo} alt="" />}
        </div>
        <div className={styles.profileActions}>
          {isOwner && <FileField saveHandler={savePhoto} validationHandler={setErrorText} />}
          {errorText && <div className={styles.errorText}>{errorText}</div>}
          {!isOwner && !followState && (
            <Button onClick={() => dispatch(userFollow(18310))} htmlType="button" block type="primary">
              Add friend
            </Button>
          )}
          {!isOwner && followState && (
            <Button onClick={() => dispatch(userUnfollow(18310))} htmlType="button" block danger>
              Unfriend
            </Button>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
};
