import React, {useEffect, useState} from 'react';
import styles from './Messages.module.scss';
import MessageItem from "./MessageItem";
import MessageInputContainer from "./MessageInput";
// import {ChatMessageType} from "../../../types";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');

const Messages: React.FC = () => {
    const [messages, setMessages] = useState<any>([]);

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            const newMessages = JSON.parse(e.data);
            setMessages([...messages, ...newMessages])
        })
    }, [messages])

    // @ts-ignore
    const ownMessagesElements = messages.map((m: unknown, index) => <MessageItem key={index} {...m}/>);

    // const foreignMessagesElements = messages.map(m => (!m.owner) &&
    //     <MessageItem key={m.id} />);

    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>
                {/*<div className={styles.foreignMessages}>*/}
                {/*    {foreignMessagesElements}*/}
                {/*</div>*/}
                <div className={styles.yourMessages}>
                    {ownMessagesElements}
                </div>
            </div>
            <MessageInputContainer/>
        </div>
    );
}

export default Messages;
