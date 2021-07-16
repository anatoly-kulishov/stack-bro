import React, {useEffect} from 'react';
import {Spin} from "antd";
import styles from './Users.module.scss';
import User from "./User";
import Paginator from "../common/Paginator";
import {UserType} from "../../types";
import UsersSearchForm from "./UsersSearchForm";

type UsersPropsType = {
    users: Array<UserType>,
    isLoading: boolean,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: (requestPage: number, pageSize: number) => void,
    userFollow: (userId: number) => void,
    userUnfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    setCurrentUserFollower: (userId: number) => void,
    followingInProgress: number[]
}

const Users: React.FC<UsersPropsType> = props => {
    const {
        users, isLoading, pageSize,
        setCurrentUserFollower, totalUsersCount, currentPage,
        setUsers, userFollow, userUnfollow,
        setCurrentPage, followingInProgress
    } = props;

    useEffect(() => {
        setUsers(currentPage, pageSize)
    }, [setUsers, currentPage, pageSize])

    return (
        <div className={`default-box p-3`}>
            {isLoading && <div className="spin-box"><Spin size="large"/></div>}
            {!isLoading && (
                <section className={styles.section}>
                    <h3 className={styles.title}>Users</h3>
                    <UsersSearchForm/>
                    <div className={styles.users}>
                        <div className="row">
                            {
                                users?.map(user => (
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
                        <Paginator currentPage={currentPage}
                                   totalUsersCount={totalUsersCount}
                                   pageSize={pageSize}
                                   setCurrentPage={setCurrentPage}/>
                    </div>
                </section>
            )}
        </div>
    )
}

export default Users;
