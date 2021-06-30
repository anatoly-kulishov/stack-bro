import React from 'react';
import styles from './DialogsList.module.scss';
import DialogItem from "./DialogItem";
import {DialogListPropsType} from "../../../types/PropsTypes";

const DialogsList: React.FC<DialogListPropsType> = props => {
    const {dialogs} = props;
    return (
        <div className={styles.dialogs}>
            <ul className={styles.dialogsList}>
                {dialogs.map(d => <DialogItem key={d.id} id={d.id} name={d.name}/>)}
            </ul>
        </div>
    );
}

export default DialogsList;
