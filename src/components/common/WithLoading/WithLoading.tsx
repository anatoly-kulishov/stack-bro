import React, { FC } from 'react';

import { Spinner } from '../Spinner/Spinner';

import './WithLoading.scss';

interface WithLoadingProps {
  isLoading: boolean;
  spinnerSize: string;
}

export const WithLoading: FC<WithLoadingProps> = ({ isLoading, spinnerSize, children }) => {
  return (
    <>
      {isLoading ? (
        <>
          {children}
          <div className="loading-overlay blurred" />
          <div className="spinner-centered">
            <Spinner size={spinnerSize} />
          </div>
        </>
      ) : (
        children
      )}
    </>
  );
};
