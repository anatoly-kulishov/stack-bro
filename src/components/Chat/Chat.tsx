import React, {memo, useEffect} from 'react';
import styles from './Chat.module.scss';
import Messages from "./Messages";
import {useDispatch, useSelector} from "react-redux";
import {startMessagesListening, stopMessagesListening} from "../../store/actions/messengerActions";
import {getAppState} from "../../store/selectors/app-selectors";

const Chat: React.FC = () => {
    const dispatch = useDispatch();
    const {theme} = useSelector(getAppState);

    useEffect(() => {
        dispatch(startMessagesListening())
        return () => {
            dispatch(stopMessagesListening())
        }
    }, [dispatch])

    return (
        <section className={`${styles.wrapper} default-box default-box--${theme}`}>
            <Messages/>
        </section>
    );
}

export default memo(Chat);
