import React from 'react';
import {ApiTwoTone} from '@ant-design/icons';
import styles from './ProfileInfo.module.scss';
import ProfileStatus from "./ProfileStatus";
import ProfileDescription from "./ProfileDescription";
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
                <ProfileDescription/>
            </>
        </div>
    );
}

export default ProfileInfo;