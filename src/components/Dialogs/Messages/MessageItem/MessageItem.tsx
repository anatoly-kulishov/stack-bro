import React, {memo} from 'react';
import styles from './MessageItem.module.scss';
import {ChatMessageType} from "../../../../types";

const MessageItem: React.FC<ChatMessageType> = props => {
    const {message} = props;
    return (
        <div className={styles.message}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default memo(MessageItem);
