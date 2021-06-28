import React, {useState} from 'react'
import {ApiTwoTone, EditTwoTone, CloseCircleTwoTone} from '@ant-design/icons';
import styles from './ProfileInfo.module.scss';
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import {IProfileInfo} from "../../../interfaces";

const ProfileInfo: React.FC<IProfileInfo> = props => {
    const {profile, saveProfile, errorText} = props;
    const [editMode, setEditMode] = useState(false);

    const onSubmit = () => {
        saveProfile().then(() => {
            setEditMode(false);
        }).catch((e: string) => console.log(e))
    }

    return (
        <div className={`${styles.wrapper} default-box`}>
            <div className={styles.profileHead}>
                <div className="d-flex justify-content-between align-items-center">
                    <h1 className={styles.profileName}>{profile.fullName}</h1>
                    <div className={styles.online}>online <span className="ml-1"><ApiTwoTone/></span></div>
                </div>
                <ProfileStatus/>
                <span className={styles.status}/>
            </div>
            <div className="d-flex justify-content-end mt-3 mb-2">
                {editMode
                    ? <CloseCircleTwoTone onClick={() => setEditMode(!editMode)}/>
                    : <EditTwoTone onClick={() => setEditMode(!editMode)}/>
                }
            </div>
            {!editMode
                ? <ProfileData/>
                : <ProfileDataForm profile={profile} onSubmit={onSubmit} errorText={errorText}/>
            }
        </div>
    );
}

export default ProfileInfo;