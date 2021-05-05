import React from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileInfo: React.FC = () => {
    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.title}>Ava + Description</div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus eligendi esse illo
                inventore necessitatibus odit possimus quia unde voluptatibus. Aperiam consectetur cumque impedit labore
                porro quis sapiente, sit temporibus! Aperiam consectetur cumque impedit labore, sit temporibus!
                Aperiam consectetur cumque impedit labore porro quis sapiente, sit temporibus! Aperiam consectetur
                cumque impedit labore, sit temporibus!
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate doloribus eligendi esse illo
                inventore necessitatibus odit possimus quia unde voluptatibus. Aperiam consectetur cumque impedit labore
                porro quis sapiente, sit temporibus! Aperiam consectetur cumque impedit labore, sit temporibus!
                Aperiam consectetur cumque impedit labore porro quis sapiente, sit temporibus! Aperiam consectetur
                cumque impedit labore, sit temporibus!
            </p>
        </div>
    );
}

export default ProfileInfo;