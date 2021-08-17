import React, {memo, useEffect, useState} from 'react';
import styles from './Chat.module.scss';
import Messages from "./Messages";
import {Nullable} from "../../types";

const Chat: React.FC = () => {
    const [wsChanel, setWsChanel] = useState<Nullable<WebSocket>>(null)

    useEffect(() => {
        let ws: WebSocket;
        const closeHandler = () => {
            console.log('Close WS')
            setTimeout(createChanel, 3000);
        }

        function createChanel() {
            ws?.removeEventListener('close', closeHandler);
            ws?.close();
            ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx');
            ws?.addEventListener('close', closeHandler)
            setWsChanel(ws);
        }

        createChanel();
    }, [])

    return (
        <section className={styles.wrapper}>
            <Messages wsChanel={wsChanel}/>
        </section>
    );
}

export default memo(Chat);
