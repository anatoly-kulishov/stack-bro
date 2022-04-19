import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getFriends, getUsersState } from '../../../store/selectors/users-selectors';
import { Friend } from './Friend/Friend';
import classes from './myFriends.module.scss';

export const MyFriends: FC = memo(() => {
  const { totalFriendsCount } = useSelector(getUsersState);
  const friends = useSelector(getFriends);

  return (
    <div className={`default-box pt-3 pl-3 pr-3 pb-2 mt-3`}>
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
  );
});
