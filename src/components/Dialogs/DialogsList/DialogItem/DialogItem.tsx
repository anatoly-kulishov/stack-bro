import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './DialogItem.module.scss';

type DialogItemPropsType = {
    id: number | string,
    name: string
}

const DialogItem: React.FC<DialogItemPropsType> = props => {
    const {id, name} = props;
    return (
        <li className={styles.listItem} key={id}>
            <NavLink to={`/dialogs/${id}`} activeClassName={styles.current}>
                <i className={styles.dot}/><span>{name}</span>
            </NavLink>
        </li>
    )
}

export default DialogItem;