import React, {useEffect} from 'react';
import styles from './Users.module.scss';
import Spinner from "../Spinner/Spinner";
import User from "./User";

type IUsers = {
    users: Array<{
        id: number,
        name: string,
        photos: { small: string, large: string },
        status: string,
        followed: boolean,
    }>,
    isLoading: boolean,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: Function,
    userFollow: Function,
    userUnfollow: Function,
    setCurrentPage: Function,
    setCurrentUserFollower: Function,
}

const Users: React.FC<IUsers> = ({users, isLoading, pageSize, setCurrentUserFollower, totalUsersCount, currentPage, setUsers, userFollow, userUnfollow, setCurrentPage}) => {
    let pagesCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages: number[] = [];
    for (let i: number = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    useEffect(() => {
        setUsers(currentPage, pageSize)
    }, [setUsers, currentPage, pageSize])

    if (isLoading) {
        return <Spinner/>
    }

    const onPageChanged = (p: any) => {
        setCurrentPage(p);
    }

    return (
        <section className={styles.section}>
            <h3 className={styles.title}>Users</h3>
            <ul className={styles.users}>
                {
                    users && users.map(user => <User key={user.id} user={user}
                                                     setCurrentUserFollower={setCurrentUserFollower}
                                                     userFollow={userFollow} userUnfollow={userUnfollow}/>)
                }
            </ul>
            <div className={styles.paginator}>
                {pages.map((p: number) => (
                    <span key={p} onClick={() => onPageChanged(p)}
                          className={(currentPage === p) ? styles.activePage : ''}>{p}</span>
                ))}
            </div>
        </section>
    );
}

export default Users;
