/* Libs */
import React from 'react';

/* Components */
import { SpinnerIcon } from '../IconsComponent/SpinnerIcon';

/* Assets */
import './Spinner.scss';

type SpinnerPropsType = {
  size: string;
};

export const Spinner: React.FC<SpinnerPropsType> = ({ size }) => {
  return (
    <div className="custom-spinner-wrapper">
      <SpinnerIcon size={size} />
    </div>
  );
};
