import React from 'react';
import styles from './Messages.module.scss';
import MessageItem from "./MessageItem";
import MessageInputContainer from "./MessageInput";
import {IMessages} from "../../../interfaces";

const Messages: React.FC<IMessages> = props => {
    const {messages} = props;
    let yourMessagesElements = messages.map((m: any) => <MessageItem key={m.id} id={m.id} message={m.message}/>);
    let foreignMessagesElements = messages.map((m: any) => <MessageItem key={m.id} id={m.id} message={m.message}/>);

    // const messagesEndRef = useRef<HTMLInputElement>(null);
    // const scrollToBottom = () => {
    //     messagesEndRef?.current?.scrollIntoView({behavior: "smooth"})
    // }
    // useEffect(scrollToBottom, [yourMessagesElements, foreignMessagesElements]);

    return (
        <div className={styles.messages}>
            <div className={styles.messagesList}>
                <div className={styles.foreignMessages}>
                    {foreignMessagesElements}
                </div>
                <div className={styles.yourMessages}>
                    {yourMessagesElements}
                </div>
                {/*<span ref={messagesEndRef}/>*/}
            </div>
            <MessageInputContainer/>
        </div>
    );
}

export default Messages;
