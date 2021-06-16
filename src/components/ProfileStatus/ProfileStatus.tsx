import React, {useEffect, useState} from 'react';
import styles from "./ProfileStatus.module.scss";
import {IProfileStatus} from "../../interfaces";
import CopyToClipboard from "../ui/CopyToClipboard";

const ProfileStatus: React.FC<IProfileStatus> = props => {
    const {profile, getStatus, updateStatus, status} = props;
    const [currentStatus, setCurrentStatus] = useState<string>(`${status}`);
    const [editMode, setEditMode] = useState<boolean>(false);

    const updateStatusHandler = () => {
        setEditMode(!editMode)
        updateStatus(currentStatus)
    }

    useEffect(() => {
        getStatus(profile?.userId || 17494)
    }, [getStatus, status])

    return (
        <div className={styles.wrapper}>
            {!editMode && (
                <CopyToClipboard customStyles={styles} onDoubleClickHandler={() => setEditMode(!editMode)}>
                    {status}
                </CopyToClipboard>
            )}
            {editMode && (
                <div>
                    <input type="text"
                           className={`${styles.statusInput} form-control`}
                           value={currentStatus}
                           onChange={(e) => setCurrentStatus(e.target.value)}
                           onBlur={() => updateStatusHandler()}
                           autoFocus
                           placeholder="Your Status"
                    />
                </div>
            )}
        </div>
    )
}

export default ProfileStatus;