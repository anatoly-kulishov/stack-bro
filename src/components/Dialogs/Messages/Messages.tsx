import React from 'react';
import styles from './Messages.module.scss';
import MessageItem from "./MessageItem";
import MessageInputContainer from "./MessageInput";
import {MessagesType} from "../../../types";

const Messages: React.FC<MessagesType> = props => {
    const {messages} = props;
    let yourMessagesElements = messages.map((m: any) => <MessageItem key={m.id} id={m.id} message={m.message}/>);
    let foreignMessagesElements = messages.map((m: any) => <MessageItem key={m.id} id={m.id} message={m.message}/>);

    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>
                <div className={styles.foreignMessages}>
                    {foreignMessagesElements}
                </div>
                <div className={styles.yourMessages}>
                    {yourMessagesElements}
                </div>
            </div>
            <MessageInputContainer/>
        </div>
    );
}

export default Messages;
