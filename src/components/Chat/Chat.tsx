import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Messages } from './Messages/Messages';
import { startMessagesListening, stopMessagesListening } from '../../store/actions/messengerActions';
import { getAppState } from '../../store/selectors/app-selectors';
import styles from './Chat.module.scss';

export const Chat: React.FC = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(getAppState);

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
  }, [dispatch]);

  return (
    <section className={`${styles.wrapper} default-box default-box--${theme}`}>
      <Messages />
    </section>
  );
};
