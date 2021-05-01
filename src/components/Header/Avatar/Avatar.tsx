import React, {Fragment} from 'react';
import styles from "./Avatar.module.scss";
import avatar from '../../../images/avatar.jpg'

const Avatar: React.FC = () => {
    return (
        <Fragment>
            <div/>
            <div className={styles.avatar}>
                <img className={styles.image}
                     src={avatar}
                     alt="Кулишов Анатолий"/>
            </div>
        </Fragment>
    );
}

export default Avatar;
