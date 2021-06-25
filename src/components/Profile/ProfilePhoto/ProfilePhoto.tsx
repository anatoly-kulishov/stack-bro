import React from 'react';
import styles from './ProfilePhoto.module.scss';
import FileField from "../../common/FileField";
import no_photo from './no_photo.png'

const ProfilePhoto: React.FC<any> = props => {
    const {savePhoto, profile} = props;
    const photoUrl = profile?.photos?.large;

    return (
        <div className={`${styles.wrapper} default-box`}>
            <div className={styles.profilePhoto}>
                <img
                    src={photoUrl ? photoUrl : no_photo}
                    alt=""/>
            </div>
            <div className={styles.profileActions}>
                <FileField save={savePhoto}/>
            </div>
        </div>
    );
}

export default ProfilePhoto;