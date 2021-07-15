import React, {useEffect, useState} from 'react';
import {Spin, Alert, Button} from "antd";
import styles from './ProfilePhoto.module.scss';
import FileField from "../../common/FileField";
import no_photo from './no_photo.png'
import {Nullable, ProfileType} from "../../../types";

type ProfilePhotoPropsType = {
    profile: ProfileType,
    isLoading: boolean,
    followStatus: Nullable<boolean>,
    saveProfile: (formData: ProfileType, setSubmitting: Function) => Promise<ProfileType>,
    savePhoto: () => void,
    userFollow: (id: number) => void,
    userUnfollow: (id: number) => void,
    isOwner: boolean
}

const ProfilePhoto: React.FC<ProfilePhotoPropsType> = props => {
    const {savePhoto, profile, isLoading, userFollow, followStatus, userUnfollow, isOwner} = props;
    const [profilePhoto, setProfilePhoto] = useState<Nullable<string>>();
    const [followState, setFollowState] = useState<Nullable<boolean>>(followStatus)
    const {ErrorBoundary} = Alert;

    useEffect(() => {
        setProfilePhoto(profile?.photos?.large)
    }, [profile])

    useEffect(() => {
        setFollowState(followStatus)
    }, [followStatus])

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
                    {isOwner && (
                        <FileField save={savePhoto}/>
                    )}
                    {!isOwner && !followState && (
                        <Button onClick={() => userFollow(18310)}
                                htmlType="button"
                                block type="primary">
                            Add friend
                        </Button>
                    )}
                    {!isOwner && followState && (
                        <Button onClick={() => userUnfollow(18310)}
                                htmlType="button"
                                block danger>
                            Unfriend
                        </Button>
                    )}
                </div>
            </ErrorBoundary>
        </div>
    );
}

export default ProfilePhoto;