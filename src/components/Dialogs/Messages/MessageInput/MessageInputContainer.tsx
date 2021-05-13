import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addMessage} from "../../../../store/actions/dialogsActions";
import MessageInput from "./MessageInput";

const MessageInputContainer: React.FC = () => {
    const dispatch = useDispatch();
    const [message, setMessage] = useState<string>('');

    const onAddMessage = () => {
        const messageData = {
            id: Date.now(),
            message: message,
        }
        console.log(messageData);
        dispatch(addMessage(messageData))
        setMessage('');
    }

    return (
        <MessageInput message={message} setMessage={setMessage} onAddMessage={onAddMessage}/>
    )
}

export default MessageInputContainer;