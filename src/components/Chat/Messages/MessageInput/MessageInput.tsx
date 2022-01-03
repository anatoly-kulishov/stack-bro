/** Libs **/
import React, {ChangeEvent, FC, useState} from 'react';
import {useDispatch} from "react-redux";

/** Utils **/
import {sendMessage} from "../../../../store/actions/messengerActions";
import {StatusMessageType} from "../../../../store/reducers/messengerReducer/messengerReducer";

/** Styles **/
import styles from './MessageInput.module.scss';

type MessageInputPropsType = {
  status: StatusMessageType
}

const MessageInput: FC<MessageInputPropsType> = ({status}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');

  const sendMessageHandler = () => {
    if (!message) return;
    dispatch(sendMessage(message))
    setMessage('');
  }

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessageHandler();
  }

  return (
    <form className={styles.inputBox} onSubmit={submitHandler}>
      <input className={`form-control ${styles.input}`}
             type="text"
             name="message"
             value={message}
             required
             onChange={changeHandler}
             placeholder="Type message here..."/>
      <button type="submit" className={styles.submitButton} disabled={status !== 'ready'}>
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
