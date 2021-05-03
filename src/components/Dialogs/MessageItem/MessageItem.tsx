import React from 'react';
import styles from './MessageItem.module.scss';

type  IMessageItem = {
    id: number | string,
    message: string,
}

const MessageItem: React.FC<IMessageItem> = ({id, message}) => {
    return (
        <li className={styles.message} key={id}>
            {message}
        </li>
    )
}

export default MessageItem;
