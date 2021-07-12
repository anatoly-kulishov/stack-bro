import React from 'react';
import styles from './Messages.module.scss';
import MessageItem from "./MessageItem";
import MessageInputContainer from "./MessageInput";
import {MessageType} from "../../../store/reducers/dialogsReducer/dialogsReducer";

type MessagesPropsType = {
    messages: MessageType[]
}

const Messages: React.FC<MessagesPropsType> = props => {
    const {messages} = props;
    let ownMessagesElements = messages.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>);
    let foreignMessagesElements = messages.map(m => <MessageItem key={m.id} id={m.id} message={m.message}/>);

    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>
                <div className={styles.foreignMessages}>
                    {foreignMessagesElements}
                </div>
                <div className={styles.yourMessages}>
                    {ownMessagesElements}
                </div>
            </div>
            <MessageInputContainer/>
        </div>
    );
}

export default Messages;
