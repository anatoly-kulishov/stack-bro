import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { sendMessage } from '../../../../store/actions_old/messengerActions';
import { StatusMessageType } from '../../../../store/reducers/messengerReducer/messengerReducer';
import { SubmitIcon } from '../../../common/IconsComponent/SubmitIcon';
import styles from './MessageInput.module.scss';

type MessageInputPropsType = {
  status: StatusMessageType;
};

export const MessageInput: FC<MessageInputPropsType> = ({ status }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>('');
  const isDisabled = status !== 'ready';

  const sendMessageHandler = () => {
    if (!message) return;
    dispatch(sendMessage(message));
    setMessage('');
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessageHandler();
  };

  return (
    <form className={styles.inputBox} onSubmit={submitHandler}>
      <input
        className={`form-control ${styles.input}`}
        type="text"
        name="message"
        value={message}
        required
        onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
        placeholder="Type message here..."
        maxLength={100}
      />
      <button type="submit" className={styles.submitButton} disabled={isDisabled}>
        <SubmitIcon />
      </button>
    </form>
  );
};
