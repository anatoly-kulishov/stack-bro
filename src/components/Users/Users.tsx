import React from 'react';
import styles from './Users.module.scss';

type IUsers = {
    users: Array<{
        id: number,
        photoUrl: string,
        followed: boolean,
        fullName: string,
        status: string,
        location: { city: string, country: string },
    }>,
    userFollow: Function,
}

const Users: React.FC<IUsers> = ({users, userFollow}) => {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Users</h3>
            <ul>
                {
                    users.map(user => {
                        return (
                            <li>
                                <img className={styles.userPhoto} src={user.photoUrl} alt=""/>
                                <b>{user.fullName}</b>
                                <b>{user.status}</b>
                                <b>{user.location.country}</b>
                                <b>{user.location.city}</b>
                                <button
                                    onClick={() => userFollow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    );
}

export default Users;
