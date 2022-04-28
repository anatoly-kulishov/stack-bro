import React, { FC, memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startMessagesListening, stopMessagesListening } from '../../store/actions_old/messengerActions';
import { getMessengerState } from '../../store/selectors/messenger-selectors';
import { WithLoading } from '../common/WithLoading/WithLoading';
import { SPINNER_SIZE } from '../../constants/general';
import { StatusMessageTypeEnum } from '../../types';
import { Messages } from './Messages/Messages';
import styles from './Chat.module.scss';

export const Chat: FC = memo(() => {
  const dispatch = useDispatch();
  const { status } = useSelector(getMessengerState);
  const socketIsReady = status !== StatusMessageTypeEnum.READY;

  useEffect(() => {
    dispatch(startMessagesListening());
    return () => {
      dispatch(stopMessagesListening());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <WithLoading isLoading={socketIsReady} spinnerSize={SPINNER_SIZE}>
      <section className={`${styles.wrapper} default-box`}>
        <Messages />
      </section>
    </WithLoading>
  );
});
