import React from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo: React.FC = () => {
    return (
        <div className={styles.descriptionBlock}>
            <div>Ava + Description</div>
        </div>
    );
}

export default ProfileInfo;