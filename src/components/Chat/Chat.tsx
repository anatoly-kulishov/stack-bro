import React, {memo, useEffect} from 'react';
import styles from './Chat.module.scss';
import Messages from "./Messages";
import {useDispatch} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../store/actions/messengerActions";

const Chat: React.FC = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return (
        <section className={styles.wrapper}>
            <Messages/>
        </section>
    );
}

export default memo(Chat);
