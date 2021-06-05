import React from 'react';
import styles from './MessageItem.module.scss';
import {IMessageItem} from "../../../../interfaces";

const MessageItem: React.FC<IMessageItem> = props => {
    const {id, message} = props;
    return (
        <div className={styles.message} key={id}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default MessageItem;
