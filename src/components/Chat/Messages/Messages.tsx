import React, {useEffect, useState} from 'react';
import styles from './Messages.module.scss';
import Message from './Message';
import MessageInput from "./MessageInput";
import {ChatMessageType, Nullable} from "../../../types";

type MessagePropsType = {
    wsChanel: Nullable<WebSocket>
}

const Messages: React.FC<MessagePropsType> = ({wsChanel}) => {
    const [messages, setMessages] = useState<ChatMessageType[]>([]);

    useEffect(() => {
        let messageHandler = (e: MessageEvent) => {
            const newMessages = JSON.parse(e.data);
            setMessages(prevMessages => [...prevMessages, ...newMessages])
        };
        wsChanel?.addEventListener('message', messageHandler)
        return () => {
            wsChanel?.removeEventListener('message', messageHandler)
        }
    }, [wsChanel])

    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>
                <div className={styles.yourMessages}>
                    {messages.map((message: ChatMessageType, index: number) => <Message key={index} {...message}/>)}
                </div>
            </div>
            <MessageInput wsChanel={wsChanel}/>
        </div>
    );
}

export default Messages;
