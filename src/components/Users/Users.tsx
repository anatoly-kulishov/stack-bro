import React, {useEffect} from 'react';
import {Pagination, Spin} from "antd";
import styles from './Users.module.scss';
import User from "./User";
// import Pagination from "../Pagination";
import {IUsers} from "../../interfaces";

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

    const onPageChanged = (p: any) => {
        setCurrentPage(p);
    }

    return (
        <div className={`default-box pl-3 pt-3 pb-3`}>
            {isLoading && <div className="spin-box"><Spin size="large"/></div>}
            {!isLoading && (
                <section className={styles.section}>
                    <h3 className={styles.title}>Users</h3>
                    <div className={styles.users}>
                        <div className="row">
                            {
                                users && users.map(user => (
                                    <div key={user.id} className="col-12 col-lg-4">
                                        <User user={user}
                                              setCurrentUserFollower={setCurrentUserFollower}
                                              userFollow={userFollow}
                                              userUnfollow={userUnfollow}
                                              isLoading={isLoading}
                                              followingInProgress={followingInProgress}/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div style={{marginTop: 20}}>
                        <Pagination defaultCurrent={currentPage}
                                    total={pages.length}
                                    onChange={onPageChanged}/>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Users;
