import React, { FC } from 'react';

import { DEFAULT_ICONS_SIZE } from '../../../../configs/constants';
import { IconComponent } from '../IconComp.props';

export const SpinnerIcon: FC<IconComponent> = ({ size = DEFAULT_ICONS_SIZE, ...args }) => {
  return (
    <svg
      className="custom-spinner"
      width={size}
      height={size}
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
      {...args}
    >
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
