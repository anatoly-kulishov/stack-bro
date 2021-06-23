import React from 'react';
import styles from './ProfileInfo.module.scss';
import CopyToClipboard from "../../common/CopyToClipboard";
import GoBack from "../../common/GoBack";
import ProfileStatus from "./ProfileStatus";
import {IProfileInfo} from "../../../interfaces";

const ProfileInfo: React.FC<IProfileInfo> = props => {
    const {profile, history, match} = props;

    return (
        <div className={`${styles.descriptionBlock} default-box`}>
            <>
                {(match.path !== '/' && <GoBack history={history}/>)}
                <div className="mt-3">
                    <ProfileStatus/>
                </div>
                <div className="mt-3">
                    <span className={styles.status}/>
                </div>
                <div className="mt-3">
                    <CopyToClipboard>
                        {profile?.lookingForAJobDescription}
                    </CopyToClipboard>
                </div>
            </>
        </div>
    );
}

export default ProfileInfo;