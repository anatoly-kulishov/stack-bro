import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { CopyToClipboard } from '../../../common/CopyToClipboard/CopyToClipboard';
import { getProfileInfo } from '../../../../store/selectors/profile-selectors';
import { useActions } from '../../../../store';
import styles from './ProfileStatus.module.scss';

type ProfileStatusPropsType = {
  status: string;
  isDisabled: boolean;
};

export const ProfileStatus: FC<ProfileStatusPropsType> = ({ status, isDisabled }) => {
  const profile = useSelector(getProfileInfo);
  const { setStatus } = useActions();

  const [currentStatus, setCurrentStatus] = useState<string>(`${status}`);
  const [editMode, setEditMode] = useState<boolean>(false);

  const updateStatusHandler = () => {
    setEditMode(!editMode);
    setStatus(currentStatus);
  };

  useEffect(() => {
    setCurrentStatus(status);
  }, [profile, status]);

  return (
    <div className={styles.wrapper}>
      {!editMode && currentStatus && (
        <CopyToClipboard
          isCopy={false}
          customStyles={styles}
          isDisabled={isDisabled}
          onDoubleClickHandler={() => setEditMode(!editMode)}
          placeholder="Set status"
        >
          {currentStatus}
        </CopyToClipboard>
      )}
      {editMode && currentStatus && (
        <input
          type="text"
          className={`${styles.statusInput} form-control`}
          value={currentStatus}
          onChange={e => setCurrentStatus(e.target.value)}
          onBlur={updateStatusHandler}
          autoFocus
          placeholder="Set status"
        />
      )}
    </div>
  );
};
