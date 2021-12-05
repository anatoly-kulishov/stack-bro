/** Libs **/
import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classNames from "classnames";

/** Components **/
import Messages from "./Messages";

/** Utils **/
import {startMessagesListening, stopMessagesListening} from "../../store/actions/messengerActions";
import {getAppTheme} from "../../store/selectors/app-selectors";

/** Styles **/
import styles from './Chat.module.scss';

const Chat: FC = () => {
  const dispatch = useDispatch();
  const appTheme = useSelector(getAppTheme);

  useEffect(() => {
    dispatch(startMessagesListening())
    return function cleanup() {
      dispatch(stopMessagesListening())
    }
  }, [dispatch])

  return (
    <section className={classNames(styles.wrapper, 'default-box', `default-box--${appTheme}`)}>
      <Messages/>
    </section>
  );
}

export default Chat;
