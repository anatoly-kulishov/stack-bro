import React, {memo} from 'react';
import styles from './Dialogs.module.scss';
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import Messages from "./Messages";

type DialogsPropsType = {}

const Dialogs: React.FC<DialogsPropsType> = () => {
    return (
        <section className={styles.dialogs}>
            <DialogsListContainer/>
            <Messages/>
        </section>
    );
}

export default memo(Dialogs);
