import React, {useState} from 'react';
import styles from './CopyToClipboard.module.scss';
import copyIcon from "../../images/copy-icon.svg";

type ICopyToClipboard = {
    children: string
}

const CopyToClipboard: React.FC<ICopyToClipboard> = ({children = '123'}) => {
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
            <div className={styles.textBox}>{children}</div>
        </div>
    )
}

export default CopyToClipboard;
