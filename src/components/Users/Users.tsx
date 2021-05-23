import React, {useEffect} from 'react';
import styles from './Users.module.scss';
import userPhoto from "../../images/avatar.jpg";
import Spinner from "../Spinner/Spinner";

type IUsers = {
    users: Array<{
        id: number,
        name: string,
        photos: { small: string, large: string },
        status: string,
        followed: boolean,
    }>,
    loading: boolean,
    setUsers: Function,
    userFollow: Function,
}

const Users: React.FC<IUsers> = ({users, loading, setUsers, userFollow}) => {

    useEffect(() => {
        setUsers()
    }, [setUsers])

    if (loading) {
        return <Spinner/>
    }

    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Users</h3>
            <ul className={styles.users}>
                {
                    users ? users.map(user => {
                        return (
                            <li key={user.id}>
                                <div>
                                    <img src={user.photos.small ? user.photos.small : userPhoto}
                                         className={styles.userPhoto}
                                         alt=""/>
                                </div>
                                <div>
                                    <b>{user.name}</b>
                                    <b>{user.status}</b>
                                    <button
                                        onClick={() => userFollow(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}
                                    </button>
                                </div>
                            </li>
                        )
                    }) : null
                }
            </ul>
        </section>
    );
}

export default Users;
