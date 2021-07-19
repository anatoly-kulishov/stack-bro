import React, {useEffect, useState} from 'react';
import {Spin, Alert, Button} from "antd";
import styles from './ProfilePhoto.module.scss';
import FileField from "../../common/FileField";
import no_photo from './no_photo.png'
import {Nullable} from "../../../types";
import {useDispatch, useSelector} from "react-redux";
import {
    getProfile,
    getProfileFollowStatus,
    getProfileIsLoading,
    getProfileIsOwnerStatus
} from "../../../store/selectors/profile-selectors";
import {userFollow, userUnfollow} from "../../../store/actions/usersActions/usersActions";
import {savePhoto} from "../../../store/actions/profileActions";

const ProfilePhoto: React.FC = () => {
    const dispatch = useDispatch();
    const profile = useSelector(getProfile);
    const followStatus = useSelector(getProfileFollowStatus);
    const isLoading = useSelector(getProfileIsLoading);
    const isOwner = useSelector(getProfileIsOwnerStatus);

    const [profilePhoto, setProfilePhoto] = useState<Nullable<string>>();
    const [followState, setFollowState] = useState<Nullable<boolean>>(followStatus)
    const {ErrorBoundary} = Alert;

    useEffect(() => {
        setProfilePhoto(profile.photos?.large)
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
                    {/* Todo!!! */}
                    {!isOwner && !followState && (
                        <Button onClick={() => dispatch(userFollow(18310))}
                                htmlType="button"
                                block type="primary">
                            Add friend
                        </Button>
                    )}
                    {!isOwner && followState && (
                        <Button onClick={() => dispatch(userUnfollow(18310))}
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
