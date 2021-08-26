import React from 'react';
import {useSelector} from "react-redux";
import styles from './Messages.module.scss';
import Message from './Message';
import MessageInput from "./MessageInput";
import {ChatMessageType} from "../../../types";
import {AppStateType} from "../../../store/reducers/rootReducer";

const Messages: React.FC = () => {
    const messages = useSelector((state: AppStateType) => state.messenger.messages);
    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>
                <div className={styles.yourMessages}>
                    {messages.map((message: ChatMessageType, index: number) => <Message key={index} {...message}/>)}
                </div>
            </div>
            <MessageInput/>
        </div>
    );
}

export default Messages;
