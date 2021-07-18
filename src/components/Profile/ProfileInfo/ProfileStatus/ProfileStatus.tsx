import React, {useEffect, useState} from 'react';
import styles from "./ProfileStatus.module.scss";
import CopyToClipboard from "../../../common/CopyToClipboard";
import {useSelector} from "react-redux";
import {getProfile, getProfileStatus} from "../../../../store/selectors/profile-selectors";

const ProfileStatus: React.FC = () => {
    const profile = useSelector(getProfile);
    const status = useSelector(getProfileStatus);
    const [currentStatus, setCurrentStatus] = useState<string>(`${status}`);
    const [editMode, setEditMode] = useState<boolean>(false);

    const updateStatusHandler = () => {
        setEditMode(!editMode)
        // updateStatus(currentStatus)
    }

    // useEffect(() => {
    //     getStatus(myProfileId)
    // }, [getStatus, status, profile, myProfileId])

    useEffect(() => {
        setCurrentStatus(status)
    }, [profile, status])

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
