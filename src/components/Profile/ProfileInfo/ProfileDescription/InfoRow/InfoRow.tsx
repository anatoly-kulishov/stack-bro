import React, {memo} from 'react';
import styles from "./InfoRow.module.scss";

const InfoRow: React.FC<any> = props => {
    const {logic, label, labeled} = props;
    if (logic) {
        return (
            <div className={styles.row}>
                <div className={styles.label}>{label}:</div>
                <div className={styles.desc}>{labeled ? labeled : '...'}</div>
            </div>
        )
    }
    return null;
}

export default memo(InfoRow);