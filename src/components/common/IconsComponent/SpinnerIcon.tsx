import React, { FC } from 'react';

import { DEFAULT_ICONS_SIZE } from '../../../configs/constants';

type SpinnerIconPropsType = {
  size?: string;
};

export const SpinnerIcon: FC<SpinnerIconPropsType> = ({ size = DEFAULT_ICONS_SIZE }) => {
  return (
    <svg className="custom-spinner" width={size} height={size} viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
      <circle
        className="custom-spinner-path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </svg>
  );
};
