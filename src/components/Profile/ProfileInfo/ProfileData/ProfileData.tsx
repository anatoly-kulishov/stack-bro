import React from 'react';
import styles from "./ProfileData.module.scss";
import Contact from "./Contact";

const ProfileData: React.FC<any> = props => {
    const {profile} = props;
    const {lookingForAJob, lookingForAJobDescription, contacts, aboutMe} = profile;

    return (
        <div className={styles.wrapper}>
            <div className={styles.infoList}>
                <div className={styles.row}>
                    <div className={styles.label}>Looking for a job:</div>
                    <div className={styles.desc}>{lookingForAJob ? "yes" : 'no'}</div>
                </div>
                {lookingForAJob && lookingForAJobDescription && (
                    <div className={styles.row}>
                        <div className={styles.label}>My professional skills:</div>
                        <div className={styles.desc}>{lookingForAJob && lookingForAJobDescription}</div>
                    </div>
                )}
                <div className={styles.row}>
                    <div className={styles.label}>About Me:</div>
                    <div className={styles.desc}>{aboutMe && aboutMe}</div>
                </div>
                {contacts && Object.keys(contacts).map((key, num) => (
                        <Contact key={num}
                                 logic={true}
                                 title={key}
                                 value={contacts[key]}/>
                    )
                )}
            </div>
        </div>
    )
}

export default ProfileData;