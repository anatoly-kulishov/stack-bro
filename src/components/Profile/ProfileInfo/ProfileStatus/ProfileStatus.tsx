import React, {useEffect, useState} from 'react';
import styles from "./ProfileStatus.module.scss";
import CopyToClipboard from "../../../common/CopyToClipboard";
import {ProfileType} from "../../../../types/GeneralTypes";

type ProfileStatusPropsType = {
    profile: ProfileType,
    status: string | null,
    myProfileId: number | null,
    getStatus: (userId: number) => void,
    updateStatus: (status: string) => void
}

const ProfileStatus: React.FC<ProfileStatusPropsType> = props => {
    const {profile, status} = props;
    const [currentStatus, setCurrentStatus] = useState<any>(`${status}`);
    const [editMode, setEditMode] = useState<boolean>(false);

    const updateStatusHandler = () => {
        setEditMode(!editMode)
        // updateStatus(currentStatus)
    }

    // useEffect(() => {
    //     getStatus(myProfileId)
    // }, [getStatus, status, profile, myProfileId])

    useEffect(() => {
        setCurrentStatus(profile.userId || status)
    }, [status, profile])

    return (
        <div className={styles.wrapper}>
            {!editMode && (
                <CopyToClipboard customStyles={styles}
                                 copy={false}
                                 onDoubleClickHandler={() => setEditMode(!editMode)}
                                 placeholder="Set status">
                    {currentStatus}
                </CopyToClipboard>
            )}
            {editMode && (
                <input type="text"
                       className={`${styles.statusInput} form-control`}
                       value={currentStatus}
                       onChange={(e) => setCurrentStatus(e.target.value)}
                       onBlur={() => updateStatusHandler()}
                       autoFocus
                       placeholder="Set status"/>
            )}
        </div>
    )
}

export default ProfileStatus;