import React from 'react';
import styles from './ProfileInfo.module.scss';
import CopyToClipboard from "../../CopyToClipboard";

const ProfileInfo: React.FC = () => {
    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.title}>Ava + Description</div>
            <CopyToClipboard>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aperiam architecto commodi corporis
                dolor dolorum ducimus eaque eos, fuga laudantium nostrum perspiciatis quas quasi, ratione reiciendis
                sequi sunt tempore totam?
            </CopyToClipboard>
        </div>
    );
}

export default ProfileInfo;