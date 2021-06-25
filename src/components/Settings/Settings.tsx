import React from 'react';
import styles from './Settings.module.scss';
import SettingsForm from "./SettingsForm";

const Settings: React.FC = () => {
    return (
        <section className={`${styles.wrapper} default-box`}>
            <SettingsForm onSubmit={(values: object) => console.log(values)}/>
        </section>
    );
}

export default Settings;