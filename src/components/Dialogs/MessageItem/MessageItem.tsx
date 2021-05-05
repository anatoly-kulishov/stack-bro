import React from 'react';
import styles from './MessageItem.module.scss';

type  IMessageItem = {
    id: number | string,
    message: string,
}

const MessageItem: React.FC<IMessageItem> = ({id, message}) => {
    return (
        <div className={styles.message} key={id}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default MessageItem;
