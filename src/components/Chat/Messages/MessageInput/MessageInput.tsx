import React, {ChangeEvent, useEffect, useState} from 'react';
import styles from './MessageInput.module.scss';
import {WSChanel} from "../Messages";

const MessageInput: React.FC = () => {
    const [message, setMessage] = useState<string>('');
    const [readyStatus, setReadyStatus] = useState<'pending' | 'ready'>('pending');

    const sendMessage = () => {
        if (!message) return;
        WSChanel.send(message)
        setMessage('');
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage();
    }

    useEffect(() => {
        WSChanel.addEventListener('open', () => {
            setReadyStatus('ready')
        })
    }, [])

    return (
        <form className={styles.inputBox} onSubmit={submitHandler}>
            <input className={`form-control ${styles.input}`}
                   type="text"
                   name="message"
                   value={message}
                   required
                   onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                   placeholder="Type message here..."/>
            <button type="submit" disabled={readyStatus !== 'ready'} className={styles.submitButton}>
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
