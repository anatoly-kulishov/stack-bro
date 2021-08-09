import React, {useEffect, useState} from 'react';
import styles from './Messages.module.scss';
import Message from './Message';
import MessageInput from "./MessageInput";
import {ChatMessageType} from "../../../types";

export const WSChanel = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        WSChanel.addEventListener('message', (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data);
            setMessages(prevMessages => [...prevMessages, ...newMessages])
        })
    }, [])

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
