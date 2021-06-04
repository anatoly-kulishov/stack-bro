import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './User.module.scss';
import userPhoto from "../../../assets/img/no-avatar.svg";

type IUser = {
    user: {
        id: number,
        name: string,
        photos: { small: string, large: string },
        status: string,
        followed: boolean
    },
    userFollow: Function,
    userUnfollow: Function,
    setCurrentUserFollower: Function,
}

const User: React.FC<IUser> = props => {
    const {user, userFollow, userUnfollow} = props;

    // props ==> setCurrentUserFollower
    // useEffect(() => {
    //     setCurrentUserFollower(user.id)
    // }, [user, setCurrentUserFollower])

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
                onClick={() => (!user.followed) ? userFollow(user.id) : userUnfollow(user.id)}>
                {user.followed ? 'Unfollow' : 'Follow'}
            </button>
        </li>
    );
}

export default User;
