import React, {FC, useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import styles from "./ProfileStatus.module.scss";
import CopyToClipboard from "../../../common/CopyToClipboard";
import {getProfile} from "../../../../store/selectors/profile-selectors";
import {getAppTheme} from "../../../../store/selectors/app-selectors";

type ProfileStatusPropsType = {
    status: string
}

const ProfileStatus: FC<ProfileStatusPropsType> = ({status}) => {
    const profile = useSelector(getProfile);
    const appTheme = useSelector(getAppTheme);
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
                <CopyToClipboard
                    copy={false}
                    customStyles={styles}
                    appTheme={appTheme}
                    onDoubleClickHandler={() => setEditMode(!editMode)}
                    placeholder="Set status">
                    {currentStatus}
                </CopyToClipboard>
            )}
            {editMode && (
                <input
                    type="text"
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
