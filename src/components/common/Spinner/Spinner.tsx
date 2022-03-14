import React from 'react';

import { SpinnerIcon } from '../IconsComponent/SpinnerIcon';

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
