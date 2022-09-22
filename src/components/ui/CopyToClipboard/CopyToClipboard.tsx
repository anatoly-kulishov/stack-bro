import React, { FC, useState } from 'react';
import cn from 'classnames';

import { ICopyToClipboard } from './CopyToClipboard.props';
import styles from './CopyToClipboard.module.scss';
import copyIcon from './copy-icon.svg';

export const CopyToClipboard: FC<ICopyToClipboard> = ({
  onDoubleClickHandler,
  customStyles,
  children = '',
  isCopy = true,
  isDisabled,
  placeholder = 'No Data',
}) => {
  const [copySuccess] = useState<string>(children);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      console.info(`copy(${text})`);
    });
  };

  const doubleClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    onDoubleClickHandler();
    event.preventDefault();
  };

  return (
    <div
      className={cn([styles.Wrapper], [customStyles.statusBar], {
        [customStyles.statusBarActive]: !isDisabled,
      })}
      onDoubleClick={e => {
        !isDisabled && doubleClickHandler(e);
      }}
    >
      {isCopy && (
        <span
          className={styles.CopyButton}
          style={{ backgroundImage: `url('${copyIcon}')'` }}
          onClick={() => copyToClipboard(copySuccess)}
        />
      )}
      <div className={`${styles.TextBox} ${customStyles.statusTextBox}`}>
        {children || <span className={styles.EmptyBox}>{placeholder}</span>}
      </div>
    </div>
  );
};
