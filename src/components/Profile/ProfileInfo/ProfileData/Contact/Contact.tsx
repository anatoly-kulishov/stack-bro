import React, {memo} from 'react';
import styles from "./Contact.module.scss";

const Contact: React.FC<any> = props => {
    const {logic, title = '', value = ''} = props;
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