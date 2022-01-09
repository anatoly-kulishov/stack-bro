import React, {memo, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import * as queryString from "querystring";
import {Alert, Spin} from "antd";
import styles from './Users.module.scss';
import User from "./User";
import Paginator from "../common/Paginator";
import {
    getCurrentPage,
    getPageSize,
    getTotalUsersCount,
    getUsers, getUsersFilter,
    getUsersLoading
} from "../../store/selectors/users-selectors";
import {
    setUsers
} from '../../store/actions/usersActions/usersActions';
import {useHistory} from "react-router-dom";
import UsersFilterForm from "./UsersFilterForm/UsersFilterForm";
import {FilterType} from "../../store/reducers/usersReducer/usersReducer";
import {getAppTheme} from "../../store/selectors/app-selectors";

type QueryParamsType = { term?: string, page?: string, friend?: string };

const Users: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const users = useSelector(getUsers)
    const currentPage = useSelector(getCurrentPage);
    const totalUsersCount = useSelector(getTotalUsersCount);
    const pageSize = useSelector(getPageSize);
    const isLoading = useSelector(getUsersLoading);
    const filter = useSelector(getUsersFilter);
    const appTheme = useSelector(getAppTheme);

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substring(1)) as QueryParamsType;

        let actualFilter = filter;
        let actualPage = currentPage;

        if (!!parsed.page) actualPage = Number(parsed.page);
        if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string};

        switch (parsed.friend) {
            case 'null':
                actualFilter = {...actualFilter, friend: null}
                break;
            case 'true':
                actualFilter = {...actualFilter, friend: true}
                break;
            case 'false':
                actualFilter = {...actualFilter, friend: false}
                break;
        }

        dispatch(setUsers(actualPage, pageSize, actualFilter))
        // eslint-disable-next-line
    }, [dispatch])

    useEffect(() => {
        const query: QueryParamsType = {};

        if (!!filter.term) query.term = filter.term;
        if (filter.friend !== null) query.friend = String(filter.friend);
        if (currentPage !== 1) query.page = String(currentPage);

        history.push({
            pathname: "/users",
            search: queryString.stringify(query)
        })
        // eslint-disable-next-line
    }, [filter, currentPage])

    const onFilterChanged = (values: FilterType) => {
        dispatch(setUsers(currentPage, pageSize, values));
    }

    const onPageChangedHandler = (pageNumber: number) => {
        dispatch(setUsers(pageNumber, pageSize, filter));
    }

    return (
        <div className={`default-box default-box--${appTheme} p-3`}>
            {isLoading && <div className="spin-box"><Spin size="large"/></div>}
            {!isLoading && (
                <section className={styles.section}>
                    <h3 className={styles.title}>Users</h3>
                    <div className="mb-3">
                        <UsersFilterForm onFilterChanged={onFilterChanged}/>
                    </div>
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
