import React, { FC, useState } from 'react';
import classNames from 'classnames';

import styles from './CopyToClipboard.module.scss';
import copyIcon from './copy-icon.svg';

type CopyToClipboardPropsType = {
  children: string;
  customStyles: { readonly [key: string]: string };
  isCopy: boolean;
  placeholder: string;
  onDoubleClickHandler: () => void;
  isDisabled?: boolean;
};

export const CopyToClipboard: FC<CopyToClipboardPropsType> = props => {
  const {
    onDoubleClickHandler,
    customStyles,
    children = '',
    isCopy = true,
    isDisabled,
    placeholder = 'No Data',
  } = props;
  const [copySuccess] = useState<string>(children);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      /* eslint-disable no-console */
      console.info(`copy(${text})`);
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
      {isCopy && (
        <span
          className={styles.copyButton}
          style={{ backgroundImage: `url('${copyIcon}')'` }}
          onClick={() => copyToClipboard(copySuccess)}
        />
      )}
      <div className={`${styles.textBox} ${customStyles.statusTextBox}`}>
        {children || <span className={styles.emptyBox}>{placeholder}</span>}
      </div>
    </div>
  );
};
