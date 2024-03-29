import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ApiTwoTone, EditTwoTone } from '@ant-design/icons';

import { ProfileEditModal } from './ProfileEditModal/ProfileEditModal';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';
import { ProfileData } from './ProfileData/ProfileData';
import { getProfileState } from '../../../../store/selectors/profile-selectors';
import { useActions } from '../../../../store';
import styles from './ProfileInfo.module.scss';

export const ProfileInfo: FC = () => {
  const { getStatus, saveProfile } = useActions();

  const { profile, error, isOwner, status } = useSelector(getProfileState);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => setIsModalVisible(false);

  useEffect(() => {
    if (profile?.userId) {
      getStatus(Number(profile.userId));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profile?.userId]);

  return (
    <div className={`${styles.wrapper} default-box`}>
      <div className={styles.profileHead}>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className={styles.profileName}>{profile?.fullName}</h1>
          <div className={styles.online}>
            online{' '}
            <span className="ml-1">
              <ApiTwoTone />
            </span>
          </div>
        </div>
        <ProfileStatus status={status} isDisabled={!isOwner} />
        <span className={styles.status} />
      </div>
      {isOwner && (
        <div className="d-flex justify-content-end mt-3 mb-2">
          <EditTwoTone onClick={showModal} />
        </div>
      )}
      <div>
        <ProfileData profile={profile} />
        <ProfileEditModal
          profile={profile}
          onSubmit={saveProfile}
          errorsText={error}
          isModalVisible={isModalVisible}
          hideModal={hideModal}
        />
      </div>
    </div>
  );
};
