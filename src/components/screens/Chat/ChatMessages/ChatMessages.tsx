import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { ChatMessageInput } from './ChatMessageInput/ChatMessageInput';
import { ChatMessage } from './ChatMessage/ChatMessage';
import { IChatMessageWithID } from '../../../../shared/types/chat.types';
import { getMessengerStatus } from '../../../../store/selectors/messenger-selectors';
import { AppStateType } from '../../../../store';
import styles from './ChatMessages.module.scss';

export const ChatMessages: FC = () => {
  const [isAutoScroll, setIsAutoScroll] = useState<boolean>(true);
  const messages = useSelector((state: AppStateType) => state.messenger.messages);
  const status = useSelector(getMessengerStatus);
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
          {messages.map((message: IChatMessageWithID) => (
            <ChatMessage key={message.id} {...message} />
          ))}
          <div ref={messagesAnchorRef} />
        </div>
      </div>
      <ChatMessageInput status={status} />
    </div>
  );
};
