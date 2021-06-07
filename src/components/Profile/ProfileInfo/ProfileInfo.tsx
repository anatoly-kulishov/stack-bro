import React from 'react';
import styles from './ProfileInfo.module.scss';
import CopyToClipboard from "../../CopyToClipboard";
import Spinner from "../../Spinner/Spinner";
import noAvatar from "../../../assets/images/no-avatar.svg"
import {IProfileInfo} from "../../../interfaces";
import GoBack from "../../GoBack";

const ProfileInfo: React.FC<IProfileInfo> = props => {
    const {profile, isLoading, history} = props;

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={styles.descriptionBlock}>
            <GoBack history={history}/>
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