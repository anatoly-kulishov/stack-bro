import React from 'react';
import styles from './MessageItem.module.scss';
import {MessageItemPropsType} from "../../../../types/PropsTypes";

const MessageItem: React.FC<MessageItemPropsType> = props => {
    const {id, message} = props;
    return (
        <div className={styles.message} key={id}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default MessageItem;
