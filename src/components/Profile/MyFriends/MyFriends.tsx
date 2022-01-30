import React, { memo } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ErrorBoundary from 'antd/es/alert/ErrorBoundary';

import classes from './myFriends.module.scss';
import { getFriends } from '../../../store/selectors/users-selectors';
import { Friend } from './Friend/Friend';
import { getAppState } from '../../../store/selectors/app-selectors';

type PathParamsType = {
  userId: string | undefined;
};

const MyFriends: React.FC<RouteComponentProps<PathParamsType>> = () => {
  const friends = useSelector(getFriends);
  const { theme } = useSelector(getAppState);

  return (
    <ErrorBoundary>
      <div className={`default-box default-box--${theme} p-3 mt-3`}>
        <div className={classes.boxTitle}>Friends ({friends.length})</div>
        <ul className={classes.myFriends}>
          {friends.map(friend => (
            <Friend key={friend.id} data={friend} />
          ))}
        </ul>
      </div>
    </ErrorBoundary>
  );
};

/* eslint-disable import/no-default-export */
export default withRouter(memo(MyFriends));
