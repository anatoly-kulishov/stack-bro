import React, {Fragment} from 'react';
import {Link} from "react-router-dom";
import styles from "./Avatar.module.scss";
import avatar from '../../../assets/img/no-avatar.svg'

const Avatar: React.FC = () => {
    return (
        <Fragment>
            <div/>
            <div className={styles.avatar}>
                <Link to="/">
                    <img className={styles.image}
                         src={avatar}
                         alt=""/>
                </Link>
            </div>
        </Fragment>
    );
}

export default Avatar;
