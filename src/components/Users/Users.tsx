import React, {memo, useEffect} from 'react';
import {Alert, Spin} from "antd";
import styles from './Users.module.scss';
import User from "./User";
import Paginator from "../common/Paginator";
import {UserType} from "../../types";
import UsersSearchForm from "./UsersSearchForm";
import {FilterType} from "../../store/reducers/usersReducer/usersReducer";

type UsersPropsType = {
    users: Array<UserType>,
    isLoading: boolean,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    setUsers: (requestPage: number, pageSize: number, filter: FilterType) => void,
    userFollow: (userId: number) => void,
    userUnfollow: (userId: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    setCurrentUserFollower: (userId: number) => void,
    followingInProgress: number[],
    filter: FilterType
}

const Users: React.FC<UsersPropsType> = props => {
    const {
        users, isLoading, pageSize,
        setCurrentUserFollower, totalUsersCount, currentPage,
        setUsers, userFollow, userUnfollow,
        setCurrentPage, followingInProgress,
    } = props;

    useEffect(() => {
        setUsers(currentPage, pageSize, {term: '', friend: null}) // Todo: Debug term filter!
    }, [setUsers, currentPage, pageSize])

    const onFilterChanged = (term: string = '') => {
        setUsers(currentPage, pageSize, {term, friend: null})
    }

    const onPageChangedHandler = (p: number) => {
        setCurrentPage(p);
    }

    return (
        <div className={`default-box p-3`}>
            {isLoading && <div className="spin-box"><Spin size="large"/></div>}
            {!isLoading && (
                <section className={styles.section}>
                    <h3 className={styles.title}>Users</h3>
                    <UsersSearchForm onFilterChanged={onFilterChanged}/>
                    <div className={`${styles.users} ${!users.length && 'pb-0'}`}>
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
                            {
                                !users.length && (
                                    <div className="w-100">
                                        <Alert
                                            message="Sorry, no results were found."
                                            description="Recommendations: Make sure all words are spelled correctly.
                                            Try using other keywords. Try using more popular keywords."
                                            type="warning"/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <div style={{marginTop: 20}}>
                        <Paginator currentPage={currentPage}
                                   totalUsersCount={totalUsersCount}
                                   pageSize={pageSize}
                                   onPageChanged={onPageChangedHandler}/>
                    </div>
                </section>
            )}
        </div>
    )
}

export default memo(Users);
