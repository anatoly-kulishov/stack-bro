import React, {memo} from 'react';
import styles from "./Contact.module.scss";
import {Nullable} from "../../../../../types";

type ContactPropsType = {
    logic: boolean,
    title: string,
    value: Nullable<string> | undefined
}

const Contact: React.FC<ContactPropsType> = props => {
    const {logic, title = '', value} = props;

    if (logic && value) {
        return (
            <div className={styles.row}>
                <div className={styles.label}>{title}:</div>
                <a href={`${value}`} target="_blank" rel="noreferrer">
                        <div className={styles.desc}>{value && value}</div>
                </a>
            </div>
        )
    }
    return null;
}

export default memo(Contact);