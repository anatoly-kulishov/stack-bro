import React, {useState, ChangeEvent} from 'react';
import styles from './MessageInput.module.scss';

const MessageInput: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const messageData = {
            id: Date.now(),
            message: message,
        }
        console.log(messageData); // dispatch(addMessage(message))
        setMessage('');
    }

    return (
        <form className={styles.inputBox} onSubmit={submitHandler}>
            <input className={`form-control ${styles.input}`}
                   type="text"
                   name="message"
                   value={message}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                   placeholder="Type message here..."/>
            <button type="submit" className={styles.submitButton}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <g stroke="#a1a1aa" strokeWidth="2" strokeLinejoin="round">
                        <path d="M21.137 11.733L3 20.466l3.359-8.733L3 3l18.137 8.733z" fill="#fff"/>
                        <path d="M21.137 11.733H6.359" strokeLinecap="round"/>
                    </g>
                    <defs/>
                </svg>
            </button>
        </form>
    )
}

export default MessageInput;