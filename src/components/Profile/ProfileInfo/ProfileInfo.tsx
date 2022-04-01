import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'antd';
import { ApiTwoTone, EditTwoTone } from '@ant-design/icons';

import styles from './ProfileInfo.module.scss';
import { ProfileStatus } from './ProfileStatus/ProfileStatus';
import { ProfileData } from './ProfileData/ProfileData';
import { getProfileState } from '../../../store/selectors/profile-selectors';
import { getStatus, saveProfile } from '../../../store/actions/profileActions';
import { EditProfileModal } from './EditProfileModal/EditProfileModal';

const { ErrorBoundary } = Alert;

export const ProfileInfo: FC = () => {
  const dispatch = useDispatch();
  const { profile, error, isOwner, status } = useSelector(getProfileState);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    if (profile.userId) {
      dispatch(getStatus(Number(profile.userId)));
    }
  }, [dispatch, profile.userId, status]);

  return (
    <div className={`${styles.wrapper} default-box`}>
      <ErrorBoundary>
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
          <EditProfileModal
            profile={profile}
            onSubmit={saveProfile}
            errorText={error}
            isModalVisible={isModalVisible}
            hideModal={hideModal}
          />
        </div>
      </ErrorBoundary>
    </div>
  );
};
