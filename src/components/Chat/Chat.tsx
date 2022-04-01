import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Messages } from './Messages/Messages';
import { startMessagesListening, stopMessagesListening } from '../../store/actions/messengerActions';
import styles from './Chat.module.scss';

export const Chat: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`${styles.wrapper} default-box`}>
      <Messages />
    </section>
  );
};
