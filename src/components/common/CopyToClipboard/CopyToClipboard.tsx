import React, {FC, memo, useState} from 'react';
import styles from './CopyToClipboard.module.scss';
import copyIcon from "./copy-icon.svg";
import {isDarkTheme} from "../../../utils/boolean-helpers";

type CopyToClipboardPropsType = {
    children: any,
    customStyles: { readonly [key: string]: string },
    copy: boolean,
    placeholder: string,
    appTheme: string,
    onDoubleClickHandler: () => void
}

const CopyToClipboard: FC<CopyToClipboardPropsType> = props => {
    const {onDoubleClickHandler, customStyles, appTheme, children = '', copy = true, placeholder = "No Data"} = props;
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
        <div className={`${styles.wrapper} ${customStyles.statusBar}`}
             onDoubleClick={(e) => doubleClickHandler(e)}>
            {copy && (
                <span className={styles.copyButton}
                      style={{backgroundImage: `url('${copyIcon}')'`}}
                      onClick={() => copyToClipboard(copySuccess)}/>
            )}
            <div className={`${styles.textBox} ${customStyles.statusTextBox} ${isDarkTheme(appTheme) && customStyles.statusTextBoxDarkTheme}`}>
                {children
                    ? children
                    : <span className={styles.emptyBox}>{placeholder}</span>}
            </div>
        </div>
    )
}

export default memo(CopyToClipboard);
