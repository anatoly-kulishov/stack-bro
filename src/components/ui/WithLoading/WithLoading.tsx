import React, { FC } from 'react';
import cn from 'classnames';

import { Spinner } from '../Spinner/Spinner';
import styles from './WithLoading.module.scss';

interface IWithLoading {
  isLoading: boolean;
  spinnerSize: string;
  children?: React.ReactNode;
}

export const WithLoading: FC<IWithLoading> = ({ isLoading, spinnerSize, children }) => {
  return (
    <>
      {isLoading ? (
        <div data-testid={styles.spinner}>
          {children}
          <div className={cn(styles.loadingOverlay, styles.blurred)} />
          <div className={styles.spinnerCentered}>
            <Spinner size={spinnerSize} />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};
