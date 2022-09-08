import React, { FC } from 'react';

import { IconComp } from '../IconComp/IconComp';
import './Spinner.scss';

interface ISpinner {
  size: string;
}

export const Spinner: FC<ISpinner> = ({ size }) => {
  return (
    <div className="custom-spinner-wrapper">
      <IconComp icon="SpinnerIcon" size={size} />
    </div>
  );
};
