import React, { FC } from 'react';

import { SpinnerIcon } from '../IconsComponent/SpinnerIcon';

import './Spinner.scss';

interface ISpinner {
  size: string;
}

export const Spinner: FC<ISpinner> = ({ size }) => {
  return (
    <div className="custom-spinner-wrapper">
      <SpinnerIcon size={size} />
    </div>
  );
};
