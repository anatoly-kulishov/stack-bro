import React, { FC } from 'react';
import cn from 'classnames';

import { Spinner } from '../Spinner/Spinner';
import { IChildren } from '../../../shared/types';
import { IWithLoading } from './WithLoading.props';
import styles from './WithLoading.module.scss';

export const WithLoading: FC<IWithLoading & IChildren> = ({ isLoading, spinnerSize, children }) => {
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
