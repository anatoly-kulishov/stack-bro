import React from 'react';
import styles from './MessageItem.module.scss';
import {MessageItemType} from "../../../../types/types";

const MessageItem: React.FC<MessageItemType> = props => {
    const {id, message} = props;
    return (
        <div className={styles.message} key={id}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default MessageItem;
