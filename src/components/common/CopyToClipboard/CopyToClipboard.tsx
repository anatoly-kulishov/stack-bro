import React, {useState} from 'react';
import styles from './CopyToClipboard.module.scss';
import copyIcon from "./copy-icon.svg";

type CopyToClipboardPropsType = {
    children: string,
    customStyles: any,
    copy: boolean,
    placeholder: string,
    onDoubleClickHandler: () => void
}

const CopyToClipboard: React.FC<CopyToClipboardPropsType> = props => {
    const {onDoubleClickHandler, customStyles, children = '', copy = true, placeholder = "No Data"} = props;
    const [copySuccess] = useState<string>(children);

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text).then(() => {
            console.log(`copy(${text})`)
        })
    }

    const doubleClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        onDoubleClickHandler()
        event.preventDefault();
    }

    return (
        <div className={`${styles.wrapper} ${customStyles?.statusBar}`}
             onDoubleClick={(e) => doubleClickHandler(e)}>
            {copy && (
                <span className={styles.copyButton}
                      style={{backgroundImage: 'url(' + copyIcon + ')'}}
                      onClick={() => copyToClipboard(copySuccess)}/>
            )}
            <div className={`${styles.textBox} ${customStyles?.statusTextBox}`}>
                {children
                    ? children
                    : <span className={styles.emptyBox}>{placeholder}</span>}
            </div>
        </div>
    )
}

export default CopyToClipboard;
