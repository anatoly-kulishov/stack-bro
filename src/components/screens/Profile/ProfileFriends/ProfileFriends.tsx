import React, { FC, memo } from 'react';
import { useSelector } from 'react-redux';

import { getFriends, getUsersTotalFriendCount } from '../../../../store/selectors/users-selectors';
import { ProfileFriend } from './ProfileFriend/ProfileFriend';
import styles from './ProfileFriends.module.scss';

export const ProfileFriends: FC = memo(() => {
  const totalFriendsCount = useSelector(getUsersTotalFriendCount);
  const friends = useSelector(getFriends);

  return (
    <div className={`default-box pt-3 pl-3 pr-3 pb-2 mt-3`}>
      <div className="pb-1">
        <div className={styles.boxTitle}>
          Friends <span className={styles.count}>{totalFriendsCount}</span>
        </div>
        <ul className={styles.myFriends}>
          {friends.map(friend => (
            <ProfileFriend key={friend.id} data={friend} />
          ))}
        </ul>
      </div>
    </div>
  );
});
