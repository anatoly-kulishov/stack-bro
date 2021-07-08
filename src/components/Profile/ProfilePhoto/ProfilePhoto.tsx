import React, {useEffect, useState} from 'react';
import {Spin, Alert} from "antd";
import styles from './ProfilePhoto.module.scss';
import FileField from "../../common/FileField";
import no_photo from './no_photo.png'
import {ProfileType} from "../../../types/GeneralTypes";

export type ProfilePhotoPropsType = {
    profile: ProfileType,
    isLoading: boolean | null,
    saveProfile: () => Promise<any>,
    savePhoto: () => void
}

const ProfilePhoto: React.FC<ProfilePhotoPropsType> = props => {
    const {savePhoto, profile, isLoading} = props;
    const [profilePhoto, setProfilePhoto] = useState<string | null>();
    const {ErrorBoundary} = Alert;

    useEffect(() => {
        setProfilePhoto(profile?.photos?.large)
    }, [profile])

    return (
        <div className={`${styles.wrapper} default-box`}>
            <ErrorBoundary>
                <div className={styles.profilePhoto}>
                    {isLoading && <div className={styles.spinBox}><Spin size="large"/></div>}
                    {!isLoading && (
                        <img src={profilePhoto ? profilePhoto : no_photo} alt=""/>
                    )}
                </div>
                <div className={styles.profileActions}>
                    <FileField save={savePhoto}/>
                </div>
            </ErrorBoundary>
        </div>
    );
}

export default ProfilePhoto;