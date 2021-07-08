import React from 'react';
import styles from './MessageItem.module.scss';

export type MessageItemPropsType = {
    id: number,
    message: string
}

const MessageItem: React.FC<MessageItemPropsType> = props => {
    const {id, message} = props;
    return (
        <div className={styles.message} key={id}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default MessageItem;
