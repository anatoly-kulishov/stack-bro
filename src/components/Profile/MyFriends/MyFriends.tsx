import React, { memo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

import { getFriends, getUsersState } from '../../../store/selectors/users-selectors';
import { Friend } from './Friend/Friend';
import { getAppState } from '../../../store/selectors/app-selectors';
import classes from './myFriends.module.scss';

type PathParamsType = {
  userId: string | undefined;
};

const MyFriends: React.FC<RouteComponentProps<PathParamsType>> = () => {
  const { theme } = useSelector(getAppState);
  const { totalFriendsCount } = useSelector(getUsersState);
  const friends = useSelector(getFriends);

  return (
    <ErrorBoundary>
      <div className={`default-box default-box--${theme} pt-3 pl-3 pr-3 pb-2 mt-3`}>
        <div className="pb-1">
          <div className={classes.boxTitle}>
            Friends <span className={classes.count}>{totalFriendsCount}</span>
          </div>
          <ul className={classes.myFriends}>
            {friends.map(friend => (
              <Friend key={friend.id} data={friend} />
            ))}
          </ul>
        </div>
      </div>
    </ErrorBoundary>
  );
};

/* eslint-disable import/no-default-export */
export default withRouter(memo(MyFriends));
