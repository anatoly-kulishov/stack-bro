import React, { FC } from 'react';

import { IconComponent } from '../IconComp.props';
import { DEFAULT_ICONS_SIZE } from '../../../../configs/constants';

export const EyeIcon: FC<IconComponent> = ({ size = DEFAULT_ICONS_SIZE, fill, ...rest }) => {
  return (
    <svg
      className="EyeIcon"
      width={size}
      height={size}
      viewBox="0 0 22 16"
      fill="#1890ff"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M21 8.00006C21 8.00006 17.3636 15.0001 11 15.0001C4.63636 15.0001 1 8.00006 1 8.00006C1 8.00006 4.63636 1.00006 11 1.00006C17.3636 1.00006 21 8.00006 21 8.00006Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 5.00006C9.34315 5.00006 8 6.34321 8 8.00006C8 9.65691 9.34315 11.0001 11 11.0001C12.6569 11.0001 14 9.65691 14 8.00006C14 6.34321 12.6569 5.00006 11 5.00006Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#fff"
      />
    </svg>
  );
};
