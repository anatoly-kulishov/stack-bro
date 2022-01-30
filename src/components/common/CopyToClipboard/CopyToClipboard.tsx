/** Libs * */
import React, { FC, useState } from 'react';
import classNames from 'classnames';

/** Utils * */
import { isDarkTheme } from '../../../utils/boolean-helpers';
/** Styles & Images * */
import styles from './CopyToClipboard.module.scss';
import copyIcon from './copy-icon.svg';

type CopyToClipboardPropsType = {
  children: string;
  customStyles: { readonly [key: string]: string };
  copy: boolean;
  placeholder: string;
  appTheme: string;
  onDoubleClickHandler: () => void;
  isDisabled: boolean;
};

export const CopyToClipboard: FC<CopyToClipboardPropsType> = props => {
  const {
    onDoubleClickHandler,
    customStyles,
    appTheme,
    children = '',
    copy = true,
    isDisabled,
    placeholder = 'No Data',
  } = props;
  const [copySuccess] = useState<string>(children);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      /* eslint-disable no-console */
      console.log(`copy(${text})`);
    });
  };

  const doubleClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    onDoubleClickHandler();
    event.preventDefault();
  };

  return (
    <div
      className={classNames([styles.wrapper], [customStyles.statusBar], {
        [customStyles.statusBarActive]: !isDisabled,
      })}
      onDoubleClick={e => {
        !isDisabled && doubleClickHandler(e);
      }}
    >
      {copy && (
        <span
          className={styles.copyButton}
          style={{ backgroundImage: `url('${copyIcon}')'` }}
          onClick={() => copyToClipboard(copySuccess)}
        />
      )}
      <div
        className={`${styles.textBox} ${customStyles.statusTextBox} ${
          isDarkTheme(appTheme) && customStyles.statusTextBoxDarkTheme
        }`}
      >
        {children || <span className={styles.emptyBox}>{placeholder}</span>}
      </div>
    </div>
  );
};
