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

    console.log(messages);

    let ownMessagesElements = messages.map(m => (m.owner) && <MessageItem key={m.id} id={String(m.id)} message={m.message}/>);
    let foreignMessagesElements = messages.map(m => (!m.owner) &&  <MessageItem key={m.id} id={String(m.id)} message={m.message}/>);

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
