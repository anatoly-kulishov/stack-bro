import React from 'react';
import styles from "./ProfileDescription.module.scss";
import InfoRow from "./InfoRow";

const ProfileDescription: React.FC<any> = props => {
    const {profile} = props;
    const {lookingForAJob, lookingForAJobDescription, contacts} = profile;

    return (
        <div className={styles.wrapper}>
            <div className={styles.infoList}>
                <div className={styles.label}>Looking for a job</div>
                <InfoRow logic={lookingForAJobDescription && lookingForAJob}
                         label='Looking for a job description'
                         labeled={lookingForAJob && lookingForAJobDescription}/>
                <InfoRow logic={contacts?.github} label='Github' labeled={contacts?.github}/>
                <InfoRow logic={contacts?.vk} label='VK' labeled={contacts?.vk}/>
                <InfoRow logic={contacts?.facebook} label='Facebook' labeled={contacts?.facebook}/>
                <InfoRow logic={contacts?.instagram} label='Instagram' labeled={contacts?.instagram}/>
                <InfoRow logic={contacts?.twitter} label='Twitter' labeled={contacts?.twitter}/>
                <InfoRow logic={contacts?.website} label='Web Site' labeled={contacts?.website}/>
                <InfoRow logic={contacts?.mainLink} label='Main Link' labeled={contacts?.mainLink}/>
            </div>
        </div>
    )
}

export default ProfileDescription;