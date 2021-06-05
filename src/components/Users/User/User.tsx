import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './User.module.scss';
import userPhoto from "../../../assets/img/no-avatar.svg";
import {IUser} from "../../../interfaces";

const User: React.FC<IUser> = props => {
    const {user, userFollow, userUnfollow, followingInProgress} = props;

    return (
        <li key={user.id} className={styles.user}>
            <NavLink to={`profile/${user.id}`}>
                <div>
                    <img src={user.photos.small ? user.photos.small : userPhoto}
                         className={styles.userPhoto}
                         alt=""/>
                </div>
                <div>
                    <b className={styles.userName}>{user.name}</b>
                    <b className={styles.userStatus}>{user.status}</b>
                </div>
            </NavLink>
            <button
                className="btn btn--small btn--light-green ml-3"
                onClick={() => (!user.followed) ? userFollow(user.id) : userUnfollow(user.id)}
                disabled={followingInProgress.some((id: number) => id === user.id)}>
                {user.followed ? 'Unfollow' : 'Follow'}
            </button>
        </li>
    );
}

export default User;
