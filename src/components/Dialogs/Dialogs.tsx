import React from 'react';
import styles from './Dialogs.module.scss';
import DialogsListContainer from "./DialogsList/DialogsListContainer";
import MessagesContainer from "./Messages/MessagesContainer";

type DialogsPropsType = {}

const Dialogs: React.FC<DialogsPropsType> = () => {
    return (
        <section className={styles.dialogs}>
            <DialogsListContainer/>
            <MessagesContainer/>
        </section>
    );
}

export default Dialogs;
