/* Libs */
import React from 'react';

/* Components */
import { Spinner } from '../Spinner/Spinner';

/* Assets */
import './WithLoading.scss';

interface WithLoadingProps {
  isLoading: boolean;
  spinnerSize: string;
}

export const WithLoading: React.FC<WithLoadingProps> = ({ isLoading, spinnerSize, children }) => {
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
