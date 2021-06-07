import React, {useEffect} from 'react';
import styles from './Users.module.scss';
import Spinner from "../Spinner/Spinner";
import User from "./User";
// import Pagination from "../Pagination";
import {IUsers} from "../../interfaces";
import {Pagination} from "antd";

const Users: React.FC<IUsers> = props => {
    const {
        users, isLoading, pageSize,
        setCurrentUserFollower, totalUsersCount, currentPage,
        setUsers, userFollow, userUnfollow,
        setCurrentPage, followingInProgress
    } = props;
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
                    users && users.map(user => (
                        <User key={user.id} user={user}
                              setCurrentUserFollower={setCurrentUserFollower}
                              userFollow={userFollow}
                              userUnfollow={userUnfollow}
                              isLoading={isLoading}
                              followingInProgress={followingInProgress}/>
                    ))
                }
            </ul>
            <div style={{marginTop: 20}}>
                <Pagination defaultCurrent={currentPage}
                            total={pages.length}
                            onChange={onPageChanged}/>
            </div>
        </section>
    );
}

export default Users;
