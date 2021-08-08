import React, {memo} from 'react';
import styles from './Dialogs.module.scss';
import Messages from "./Messages";

type DialogsPropsType = {}

const Dialogs: React.FC<DialogsPropsType> = () => {
    return (
        <section className={styles.dialogs}>
            <Messages/>
        </section>
    );
}

export default memo(Dialogs);
