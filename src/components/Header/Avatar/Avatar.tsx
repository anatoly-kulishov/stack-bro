import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Avatar.module.scss";
import avatar from '../../../assets/img/no-avatar.svg'

const Avatar: React.FC = () => {
    return (
        <>
            <div/>
            <div className={styles.avatar}>
                <Link to="/">
                    <img className={styles.image}
                         src={avatar}
                         alt=""/>
                </Link>
            </div>
        </>
    );
}

export default Avatar;
