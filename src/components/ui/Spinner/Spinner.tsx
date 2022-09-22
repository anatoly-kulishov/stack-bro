import React, { FC } from 'react';

import { IconComp } from '../IconComp/IconComp';
import { ISpinner } from './Spinner.props';
import './Spinner.scss';

export const Spinner: FC<ISpinner> = ({ size }) => {
  return (
    <div className="custom-spinner-wrapper">
      <IconComp icon="SpinnerIcon" size={size} />
    </div>
  );
};
