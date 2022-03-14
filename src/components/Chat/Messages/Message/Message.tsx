import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

import { getAuthState } from '../../../../store/selectors/auth-selectors';
import { ChatMessageType } from '../../../../types';
import styles from './Message.module.scss';

export const Message: React.FC<ChatMessageType> = ({ message, photo, userId, userName }) => {
  const ownerUserId = useSelector(getAuthState);

  return (
    <div className={styles.message}>
      <Link to={`/${userId}`}>
        <Avatar src={photo} icon={<UserOutlined />} />
      </Link>
      <div className={styles.MessageStack}>
        <Link to={`/${userId}`}>
          <span className={styles.MessageStackName}>
            {userName} {ownerUserId.userId === userId && '...'}
          </span>
        </Link>
        <small className={styles.messageBox}>{message}</small>
      </div>
    </div>
  );
};
