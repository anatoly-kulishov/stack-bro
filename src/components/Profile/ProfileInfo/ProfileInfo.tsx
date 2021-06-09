import React from 'react';
import styles from './ProfileInfo.module.scss';
import CopyToClipboard from "../../CopyToClipboard";
import Spinner from "../../Spinner/Spinner";
import GoBack from "../../GoBack";
import {IProfileInfo} from "../../../interfaces";

const ProfileInfo: React.FC<IProfileInfo> = props => {
    const {profile, isLoading, history} = props;

    console.log(profile)

    if (isLoading) {
        return <Spinner/>
    }

    return (
        <div className={styles.descriptionBlock}>
            <GoBack history={history}/>
            <div className="mt-3">
                <span className={styles.status}>

                </span>
            </div>
            <div className="mt-3">
                <CopyToClipboard>
                    {profile?.lookingForAJobDescription}
                </CopyToClipboard>
            </div>
        </div>
    );
}

export default ProfileInfo;