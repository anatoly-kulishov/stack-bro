import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {Spin, Alert, Button} from "antd";
import styles from './ProfilePhoto.module.scss';
import FileField from "../../common/FileField";
import no_photo from './no_photo.png'
import {Nullable} from "../../../types";
import {
    getProfile,
    getProfileFollowStatus,
    getProfileIsLoading,
} from "../../../store/selectors/profile-selectors";
import {userFollow, userUnfollow} from "../../../store/actions/usersActions";
import {savePhoto} from "../../../store/actions/profileActions";
import {getAppTheme} from "../../../store/selectors/app-selectors";

const {ErrorBoundary} = Alert;

const ProfilePhoto: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const profile = useSelector(getProfile);
    const followStatus = useSelector(getProfileFollowStatus);
    const isLoading = useSelector(getProfileIsLoading);
    const appTheme = useSelector(getAppTheme);

    const [profilePhoto, setProfilePhoto] = useState<Nullable<string>>();
    const [followState, setFollowState] = useState<Nullable<boolean>>(followStatus)
    const isOwnerProfile = history.location.pathname === '/';
    const userId = Number(history.location.pathname?.substr(1));

    useEffect(() => {
        setProfilePhoto(profile.photos?.large)
    }, [profile])

    useEffect(() => {
        setFollowState(followStatus)
    }, [followStatus])

    const follow = () => {
        dispatch(userFollow(userId))
    }

    const unfollow = () => {
        dispatch(userUnfollow(userId))
    }

    return (
        <div className={`${styles.wrapper} default-box default-box--${appTheme}`}>
            <ErrorBoundary>
                <div className={styles.profilePhoto}>
                    {isLoading && <div className={styles.spinBox}><Spin size="large"/></div>}
                    {!isLoading && (
                        <img src={profilePhoto ? profilePhoto : no_photo} alt=""/>
                    )}
                </div>
                <div className={styles.profileActions}>
                    {isOwnerProfile && (
                        <FileField save={savePhoto}/>
                    )}
                    {!isOwnerProfile && !followState && (
                        <Button onClick={follow}
                                htmlType="button"
                                block type="primary">
                            Add friend
                        </Button>
                    )}
                    {!isOwnerProfile && followState && (
                        <Button onClick={unfollow}
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
