import React, {useEffect, useState} from 'react';
import styles from './Messages.module.scss';
import MessageInputContainer from "./MessageInput";
import Message from './Message';
import {ChatMessageType} from "../../../types";

export const WSChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        WSChanel.addEventListener('message', (e: MessageEvent) => {
            let newMessages = JSON.parse(e.data);
            setMessages(prevMessages => [...prevMessages, ...newMessages])
        })
    }, [messages])


    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>
                <div className={styles.yourMessages}>
                    {messages.map((message: ChatMessageType, index: number) => <Message key={index} {...message}/>)}
                </div>
            </div>
            <MessageInputContainer/>
        </div>
    );
}

export default Messages;
