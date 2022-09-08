import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

import { IChatMessageInput } from '../../../../../shared/types/chat.types';
import { useActions } from '../../../../../store';
import { IconComp } from '../../../../ui/IconComp/IconComp';
import styles from './ChatMessageInput.module.scss';

export const ChatMessageInput: FC<IChatMessageInput> = ({ status }) => {
  const { sendMessage } = useActions();
  const [message, setMessage] = useState<string>('');
  const isDisabled = status !== 'ready';

  const sendMessageHandler = () => {
    if (!message) return;
    sendMessage(message);
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
        <IconComp icon="SubmitIcon" />
      </button>
    </form>
  );
};
