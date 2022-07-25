import React, { FC } from 'react';

import { IProfile, IProfileContacts } from '../../../../shared/types/profile.types';
import { Nullable } from '../../../../shared/types';
import { Contact } from './Contact/Contact';
import styles from './ProfileData.module.scss';

interface IProfileData {
  profile: Nullable<IProfile>;
}

export const ProfileData: FC<IProfileData> = ({ profile }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.infoList}>
        <div className={styles.row}>
          <div className={styles.label}>Looking for a job:</div>
          <div className={styles.desc}>{profile?.lookingForAJob ? 'yes' : 'no'}</div>
        </div>
        {profile?.lookingForAJob && profile.lookingForAJobDescription && (
          <div className={styles.row}>
            <div className={styles.label}>My professional skills:</div>
            <div className={styles.desc}>{profile?.lookingForAJob && profile.lookingForAJobDescription}</div>
          </div>
        )}
        <div className={styles.row}>
          <div className={styles.label}>About Me:</div>
          <div className={styles.desc}>{profile?.aboutMe && profile.aboutMe}</div>
        </div>
        {profile?.contacts &&
          Object.keys(profile?.contacts).map((key: string) => (
            <Contact key={key} isLogic={true} title={key} value={profile?.contacts[key as keyof IProfileContacts]} />
          ))}
      </div>
    </div>
  );
};
