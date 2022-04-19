import React, { FC } from 'react';

import { Spinner } from '../Spinner/Spinner';

import './WithLoading.scss';

export type WithLoadingPropsType = {
  isLoading: boolean;
  spinnerSize: string;
};

export const WithLoading: FC<WithLoadingPropsType> = ({ isLoading, spinnerSize, children }) => {
  return (
    <>
      {isLoading ? (
        <div data-testid="spinner">
          {children}
          <div className="loading-overlay blurred" />
          <div className="spinner-centered">
            <Spinner size={spinnerSize} />
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
};
