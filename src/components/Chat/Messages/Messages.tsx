import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { MessageInput } from './MessageInput/MessageInput';
import { Message } from './Message/Message';
import { AppStateType } from '../../../store/reducers/rootReducer';
import { getMessengerState } from '../../../store/selectors/messenger-selectors';
import { ChatMessageType } from '../../../types';
import styles from './Messages.module.scss';

export const Messages: FC = () => {
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true);
  const messages = useSelector((state: AppStateType) => state.messenger.messages);
  const { status } = useSelector(getMessengerState);
  const messagesAnchorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isAutoScroll) {
      messagesAnchorRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isAutoScroll]);

  const scrollHandler = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const element = e.currentTarget;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      !isAutoScroll && setIsAutoScroll(true);
    } else {
      isAutoScroll && setIsAutoScroll(false);
    }
  };

  return (
    <div className={styles.messages}>
      <div className={styles.messagesList} onScroll={scrollHandler}>
        <div className={styles.yourMessages}>
          {messages.map((message: ChatMessageType) => (
            <Message key={message.id} {...message} />
          ))}
          <div ref={messagesAnchorRef} />
        </div>
      </div>
      <MessageInput status={status} />
    </div>
  );
};
