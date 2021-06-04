import React from 'react';
import styles from './ProfileInfo.module.scss';
import CopyToClipboard from "../../CopyToClipboard";
import Spinner from "../../Spinner/Spinner";
import noAvatar from "../../../assets/img/no-avatar.svg"

type ProfileInfo = {
    profile: any,
    isLoading: boolean,
    history: any
}

const ProfileInfo: React.FC<ProfileInfo> = props => {
    const {profile, isLoading, history} = props;

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={styles.descriptionBlock}>
            <button onClick={() => history.goBack()} className="btn btn--green mb-3">Go Back</button>
            <div className="d-flex align-items-center">
                <img className={styles.avatar}
                     src={profile.photos.large ? profile.photos.large : noAvatar}
                     alt=""/>
                <span className={styles.title}>{profile?.fullName}</span>
            </div>
            <div className="mt-2">
                <label>lookingForAJobDescription</label>
                <CopyToClipboard>
                    {profile?.lookingForAJobDescription}
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default ProfileInfo;