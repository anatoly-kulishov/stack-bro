import React, {useState} from 'react';
import styles from "./ProfileStatus.module.scss";
import {IProfileStatus} from "../../../interfaces";
import CopyToClipboard from "../../CopyToClipboard";

const ProfileStatus: React.FC<IProfileStatus> = props => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [status, setStatus] = useState<string>("Hello World!");

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
                           value={status}
                           onChange={(e) => setStatus(e.target.value)}
                           onBlur={() => setEditMode(!editMode)}
                           autoFocus
                           placeholder="Your Status"
                    />
                </div>
            )}
        </div>
    )
}

export default ProfileStatus;