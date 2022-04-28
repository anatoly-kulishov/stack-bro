import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { stringify } from 'query-string';
import { Alert } from 'antd';

import { User } from './User/User';
import { Paginator } from '../common/Paginator/Paginator';
import { getUsers, getUsersState } from '../../store/selectors/users-selectors';
import { UsersFilterForm } from './UsersFilterForm/UsersFilterForm';
import { AppRoutesEnum, FilterType } from '../../types';
import { useActions } from '../../store';
import styles from './Users.module.scss';

type QueryParamsType = { term?: string; page?: string; friend?: string };

export const Users: FC = () => {
  const navigate = useNavigate();
  const { setUsers } = useActions();

  const users = useSelector(getUsers);
  const { currentPage, totalUsersCount, pageSize, isLoading, filter } = useSelector(getUsersState);

  useEffect(() => {
    const parsed = {
      page: 0,
      term: '',
      friend: 'false',
    };

    let actualFilter = filter;
    let actualPage = currentPage;

    if (parsed.page) {
      actualPage = Number(parsed.page);
    }
    if (parsed.term) {
      actualFilter = { ...actualFilter, term: parsed?.term as string };
    }
    if (parsed.friend) {
      actualFilter = { ...actualFilter, friend: filter?.friend };
    }
    if (!parsed.friend) {
      actualFilter = { ...actualFilter, friend: filter?.friend };
    }
    setUsers(actualPage, pageSize, actualFilter);
  }, [currentPage, filter]);

  useEffect(() => {
    const query: QueryParamsType = {};

    if (filter?.term) query.term = filter.term;
    if (filter?.friend !== null) query.friend = String(filter?.friend);
    if (currentPage !== 1) query.page = String(currentPage);

    navigate({
      pathname: `/${AppRoutesEnum.USERS}`,
      search: stringify(query),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, currentPage]);

  const onFilterChanged = (values: FilterType) => {
    setUsers(currentPage, pageSize, values);
  };

  const onPageChangedHandler = (pageNumber: number) => {
    setUsers(pageNumber, pageSize, filter);
  };

  return (
    <div className="default-box p-3">
      <section className={styles.section}>
        <h3 className={styles.title}>Users</h3>
        <div className="mb-3">
          <UsersFilterForm onFilterChanged={onFilterChanged} />
        </div>
        <div className={`${styles.users} ${!users.length && 'pb-0'}`}>
          <div className="row">
            {users &&
              users.map(user => (
                <div key={user.id} className="col-12 col-lg-4">
                  <User user={user} isLoading={isLoading} />
                </div>
              ))}
            {!users.length && (
              <div className="w-100">
                <Alert
                  message="Sorry, no results were found."
                  description="Recommendations: Make sure all words are spelled correctly.
                                            Try using other keywords. Try using more popular keywords."
                  type="warning"
                />
              </div>
            )}
          </div>
        </div>
        <div className={styles.PaginatorWrap}>
          <Paginator
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={onPageChangedHandler}
          />
        </div>
      </section>
    </div>
  );
};
