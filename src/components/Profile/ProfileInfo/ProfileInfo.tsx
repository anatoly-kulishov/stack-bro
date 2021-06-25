import React from 'react';
import {ApiTwoTone} from '@ant-design/icons';
import styles from './ProfileInfo.module.scss';
import ProfileStatus from "./ProfileStatus";
import {IProfileInfo} from "../../../interfaces";

const ProfileInfo: React.FC<IProfileInfo> = props => {
    const {myProfile} = props;

    return (
        <div className={`${styles.wrapper} default-box`}>
            <>
                <div className={styles.profileHead}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className={styles.profileName}>{myProfile.login}</h1>
                        <div className={styles.online}>online <span className="ml-1"><ApiTwoTone/></span></div>
                    </div>
                    <ProfileStatus/>
                    <span className={styles.status}/>
                </div>
                <div className={styles.profileBody}>
                    <div className={styles.infoList}>
                        <div className={styles.infoRow}><span className={styles.label}>Looking for a job:</span> <span className={styles.desc}>True</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Looking for a job description:</span> <span className={styles.desc}>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Github:</span> <span className={styles.desc}>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>VK:</span> <span>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Facebook:</span> <span className={styles.desc}>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Instagram:</span> <span className={styles.desc}>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Twitter:</span> <span className={styles.desc}>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Website:</span> <span className={styles.desc}>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Youtube:</span> <span className={styles.desc}>...</span></div>
                        <div className={styles.infoRow}><span className={styles.label}>Main Link:</span> <span className={styles.desc}>...</span></div>
                    </div>
                </div>
            </>
        </div>
    );
}

export default ProfileInfo;