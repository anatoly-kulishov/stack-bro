import React, {FC, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Alert} from "antd";
import {ApiTwoTone, EditTwoTone, CloseCircleTwoTone} from '@ant-design/icons';
import styles from './ProfileInfo.module.scss';
import ProfileStatus from "./ProfileStatus";
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import {
    getProfile,
    getProfileErrorText,
    getProfileIsOwnerStatus,
    getProfileStatus
} from "../../../store/selectors/profile-selectors";
import {getStatus, saveProfile} from "../../../store/actions/profileActions";
import {getAppTheme} from "../../../store/selectors/app-selectors";

const {ErrorBoundary} = Alert;

const ProfileInfo: FC = () => {
    const dispatch = useDispatch();
    const profile = useSelector(getProfile);
    const errorText = useSelector(getProfileErrorText);
    const appTheme = useSelector(getAppTheme);
    const isOwner = useSelector(getProfileIsOwnerStatus);
    const profileStatus = useSelector(getProfileStatus);
    const [editMode, setEditMode] = useState<boolean>(false);

    useEffect(() => {
        if(profile.userId) {
            dispatch(getStatus(Number(profile.userId)))
        }
    }, [dispatch, profile.userId, profileStatus])

    return (
        <div className={`${styles.wrapper} default-box default-box--${appTheme}`}>
            <ErrorBoundary>
                <div className={styles.profileHead}>
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className={styles.profileName}>{profile?.fullName}</h1>
                        <div className={styles.online}>online <span className="ml-1"><ApiTwoTone/></span></div>
                    </div>
                    <ProfileStatus status={profileStatus} isDisabled={!isOwner}/>
                    <span className={styles.status}/>
                </div>
                {isOwner && (
                    <div className="d-flex justify-content-end mt-3 mb-2">
                        {editMode
                            ? <CloseCircleTwoTone onClick={() => setEditMode(!editMode)}/>
                            : <EditTwoTone onClick={() => setEditMode(!editMode)}/>
                        }
                    </div>
                )}
                <div>
                    {!editMode
                        ? <ProfileData profile={profile}/>
                        : <ProfileDataForm profile={profile} onSubmit={saveProfile} errorText={errorText}/>
                    }
                </div>
            </ErrorBoundary>
        </div>
    );
}

export default ProfileInfo;
