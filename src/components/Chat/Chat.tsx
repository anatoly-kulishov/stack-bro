import React, {memo} from 'react';
import styles from './Chat.module.scss';
import Messages from "./Messages";

const Chat: React.FC = () => {
    return (
        <section className={styles.wrapper}>
            <Messages/>
        </section>
    );
}

export default memo(Chat);
