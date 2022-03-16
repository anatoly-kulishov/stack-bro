import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CopyToClipboard } from '../../../common/CopyToClipboard/CopyToClipboard';
import { getProfileState } from '../../../../store/selectors/profile-selectors';
import { getAppState } from '../../../../store/selectors/app-selectors';
import { setStatus } from '../../../../store/actions/profileActions';
import styles from './ProfileStatus.module.scss';

type ProfileStatusPropsType = {
  status: string;
  isDisabled: boolean;
};

export const ProfileStatus: FC<ProfileStatusPropsType> = ({ status, isDisabled }) => {
  const dispatch = useDispatch();
  const { profile } = useSelector(getProfileState);
  const { theme } = useSelector(getAppState);
  const [currentStatus, setCurrentStatus] = useState<string>(`${status}`);
  const [editMode, setEditMode] = useState<boolean>(false);

  const updateStatusHandler = () => {
    setEditMode(!editMode);
    dispatch(setStatus(currentStatus));
  };

  useEffect(() => {
    setCurrentStatus(status);
  }, [profile, status]);

  return (
    <div className={styles.wrapper}>
      {!editMode && currentStatus && (
        <CopyToClipboard
          copy={false}
          customStyles={styles}
          appTheme={theme}
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
