import React from 'react';
import styles from './Dialogs.module.scss';
import DialogItem from "./DialogItem";
import MessageItem from "./MessageItem";
import {dialogs, messages} from "./data";

const Dialogs: React.FC = () => {
    let dialogsElements = dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>);
    let messagesElements = messages.map(m => <MessageItem key={m.id} id={m.id} message={m.text}/>);

    return (
        <section className={styles.dialogs}>
            <ul className={styles.dialogsList}>
                {dialogsElements}
            </ul>
            <div className={styles.messages}>
                <ul className={styles.messagesList}>
                    {messagesElements}
                </ul>
            </div>
        </section>
    );
}

export default Dialogs;
