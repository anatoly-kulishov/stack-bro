import React from 'react';
import styles from './DialogsList.module.scss';
import DialogItem from "./DialogItem";

type IDialogList = {
    dialogs: Array<object>
}

const DialogsList: React.FC<IDialogList> = ({dialogs}) => {
    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogsList}>
                {dialogs.map((d: any) => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </ul>
        </div>
    );
}

export default DialogsList;
