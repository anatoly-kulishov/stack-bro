import React, {memo} from 'react';
import styles from "./Contact.module.scss";

type ContactPropsType = {
    logic: boolean,
    title: string | null,
    value: string | null | undefined
}

const Contact: React.FC<ContactPropsType> = props => {
    const {logic, title = '', value} = props;
    if (logic) {
        return (
            <div className={styles.row}>
                <div className={styles.label}>{title}:</div>
                <div className={styles.desc}>{value ? value : '...'}</div>
            </div>
        )
    }
    return null;
}

export default memo(Contact);