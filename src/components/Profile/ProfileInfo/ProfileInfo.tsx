import React from 'react';
import styles from './ProfileInfo.module.scss';
import CopyToClipboard from "../../CopyToClipboard";
import GoBack from "../../GoBack";
import Spinner from "../../Spinner/Spinner";
import {IProfileInfo} from "../../../interfaces";

const ProfileInfo: React.FC<IProfileInfo> = props => {
    const {profile, isLoading, history, match} = props;

    return (
        <div className={`${styles.descriptionBlock} default-box`}>
            {isLoading && <Spinner/>}
            {!isLoading && (
                <>
                    {(match.path !== '/' && <GoBack history={history}/>)}
                    <div className="mt-3">
                        <span className={styles.status}/>
                    </div>
                    <div className="mt-3">
                        <CopyToClipboard>
                            {profile?.lookingForAJobDescription}
                        </CopyToClipboard>
                    </div>
                </>
            )}
        </div>
    );
}

export default ProfileInfo;