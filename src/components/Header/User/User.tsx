import React from 'react';
import styles from "./User.module.scss";

const User: React.FC = () => {
    return (
        <div className={styles.user}>
            <div className={styles.info}>Кулишов Анатолий</div>
            <div className={styles.control}>
                <span className="btn btn--danger">Выйти</span>
            </div>
        </div>
    );
}

export default User;
