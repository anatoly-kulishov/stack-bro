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
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: Function,
    userFollow: Function,
    setCurrentPage: Function
}

const Users: React.FC<IUsers> = ({users, loading, pageSize, totalUsersCount, currentPage, setUsers, userFollow, setCurrentPage}) => {
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    useEffect(() => {
        setUsers(currentPage, pageSize)
    }, [setUsers, currentPage, pageSize])

    if (loading) {
        return <Spinner/>
    }

    const onPageChanged = (p: any) => {
        setCurrentPage(p);
    }

    return (
        <section className={styles.section}>
            <div className={styles.paginator}>
                {pages.map((p: number) => (
                    <span key={p} onClick={() => onPageChanged(p)}
                          className={(currentPage === p) ? styles.activePage : ''}>{p}</span>
                ))}
            </div>
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
