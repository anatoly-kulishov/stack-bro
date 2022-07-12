import React, { FC, useEffect, useState } from 'react';
import { Spin } from 'antd';
import { useSelector } from 'react-redux';

import styles from './ProfilePhoto.module.scss';
import { Nullable } from '../../../types';
import { getProfileState } from '../../../store/selectors/profile-selectors';
import no_photo from './no_photo.png';
import { ProfileActions } from '../ProfileActions/ProfileActions';

export const ProfilePhoto: FC = () => {
  const { profile, isLoading, followStatus } = useSelector(getProfileState);

  const [profilePhoto, setProfilePhoto] = useState<Nullable<string>>();
  const [followState, setFollowState] = useState<Nullable<boolean>>(followStatus);

  useEffect(() => {
    setProfilePhoto(profile?.photos?.large);
  }, [profile]);

  useEffect(() => {
    setFollowState(followStatus);
  }, [followStatus]);

  return (
    <div className={`${styles.wrapper} default-box`}>
      <div className={styles.profilePhoto}>
        {isLoading && (
          <div className={styles.spinBox}>
            <Spin size="large" />
          </div>
        )}
        {!isLoading && <img src={profilePhoto || no_photo} alt="" />}
      </div>
      <ProfileActions followState={followState} setFollowState={setFollowState} />
    </div>
  );
};
