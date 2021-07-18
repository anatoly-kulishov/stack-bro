import React, {memo, useEffect} from 'react';
import {Alert, Spin} from "antd";
import styles from './Users.module.scss';
import User from "./User";
import Paginator from "../common/Paginator";
import UsersSearchForm from "./UsersSearchForm";
import {useDispatch, useSelector} from "react-redux";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersLoading
} from "../../store/selectors/users-selectors";
import {
    actions,
    setUsers
} from '../../store/actions/usersActions/usersActions';

const Users: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector(getUsers)
    const currentPage = useSelector(getCurrentPage);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const pageSize = useSelector(getPageSize);
    const isLoading = useSelector(getUsersLoading);
    // const filter = useSelector(getUsersFilter);

    useEffect(() => {
        dispatch(setUsers(currentPage, pageSize, {term: '', friend: null})) // Todo: Debug term filter!
    }, [dispatch, currentPage, pageSize])

    const onFilterChanged = (term: string = '') => dispatch(setUsers(currentPage, pageSize, {term, friend: null}));
    const onPageChangedHandler = (p: number) => dispatch(actions.setCurrentPage(p));

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
                                        <User user={user} isLoading={isLoading}/>
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
