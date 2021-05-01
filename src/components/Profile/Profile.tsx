import React from 'react';
import styles from "./Profile.module.scss";
import MyPosts from "./MyPosts";

const Profile: React.FC = () => {
    return (
        <div className={styles.profile}>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    );
}

export default Profile;
