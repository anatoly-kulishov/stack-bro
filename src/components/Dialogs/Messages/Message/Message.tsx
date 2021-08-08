import React, {memo} from 'react';
import styles from './Message.module.scss';
import {ChatMessageType} from "../../../../types";

const Message: React.FC<ChatMessageType> = props => {
    const {message} = props;
    return (
        <div className={styles.message}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default memo(Message);
