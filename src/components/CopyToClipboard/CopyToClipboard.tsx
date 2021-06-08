import React, {useState} from 'react';
import styles from './CopyToClipboard.module.scss';
import copyIcon from "../../assets/images/copy-icon.svg";
import {ICopyToClipboard} from "../../interfaces";

const CopyToClipboard: React.FC<ICopyToClipboard> = props => {
    const {children = ''} = props;
    const [copySuccess] = useState(children);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log(`copy(${text})`)
        })
    }

    return (
        <div className={styles.wrapper}>
            <span className={styles.copyButton}
                  style={{backgroundImage: 'url(' + copyIcon + ')'}}
                  onClick={() => copyToClipboard(copySuccess)}/>
            <div className={styles.textBox}>
                {children
                    ? children
                    : <span className={styles.emptyBox}>No Data</span>}
            </div>
        </div>
    )
}

export default CopyToClipboard;
