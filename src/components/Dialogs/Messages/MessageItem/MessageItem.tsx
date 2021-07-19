import React, {memo} from 'react';
import styles from './MessageItem.module.scss';

export type MessageItemPropsType = {
    id: string,
    message: string
}

const MessageItem: React.FC<MessageItemPropsType> = props => {
    const {id, message} = props;
    return (
        <div className={styles.message} id={id}>
            <small className={styles.messageBox}>{message}</small>
        </div>
    )
}

export default memo(MessageItem);
