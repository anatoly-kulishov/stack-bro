import React, {useEffect, useRef} from 'react';
import styles from './Dialogs.module.scss';
import {dialogs, yourMessages, foreignMessages} from "./data";
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import MessageInput from "./MessageInput";

const Dialogs: React.FC = () => {
    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let yourMessagesElements = yourMessages.map(m => <MessageItem key={m.id} id={m.id} message={m.text}/>);
    let foreignMessagesElements = foreignMessages.map(m => <MessageItem key={m.id} id={m.id} message={m.text}/>);

    const messagesEndRef = useRef<HTMLInputElement>(null);
    const scrollToBottom = () => {
        messagesEndRef?.current?.scrollIntoView({behavior: "smooth"})
    }
    useEffect(scrollToBottom, [yourMessagesElements, foreignMessagesElements]);

    return (
        <section className={styles.dialogs}>
            <ul className={styles.dialogsList}>
                {dialogsElements}
            </ul>
            <div className={styles.messages}>
                <div className={styles.messagesList}>
                    <div className={styles.foreignMessages}>
                        {foreignMessagesElements}
                    </div>
                    <div className={styles.yourMessages}>
                        {yourMessagesElements}
                    </div>
                    <div ref={messagesEndRef}/>
                </div>
                <MessageInput/>
            </div>
        </section>
    );
}

export default Dialogs;
