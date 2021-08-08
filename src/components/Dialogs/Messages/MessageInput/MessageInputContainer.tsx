import React, {useState} from 'react';
import MessageInput from "./MessageInput";
import {WSChanel} from "../Messages";

const MessageInputContainer: React.FC = () => {
    const [message, setMessage] = useState<string>('');

    const sendMessage = () => {
        if (!message) {
            return;
        }
        WSChanel.send(message)
        setMessage('');
    }

    return (
        <MessageInput message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    )
}

export default MessageInputContainer;
