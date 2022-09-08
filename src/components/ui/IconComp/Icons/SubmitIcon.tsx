import React, { FC } from 'react';

import { DEFAULT_ICONS_SIZE } from '../../../../configs/constants';
import { IconComponent } from '../IconComp.props';

export const SubmitIcon: FC<IconComponent> = ({ size = DEFAULT_ICONS_SIZE, ...args }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none" {...args}>
      <g stroke="#a1a1aa" strokeWidth="2" strokeLinejoin="round">
        <path d="M21.137 11.733L3 20.466l3.359-8.733L3 3l18.137 8.733z" fill="#fff" />
        <path d="M21.137 11.733H6.359" strokeLinecap="round" />
      </g>
      <defs />
    </svg>
  );
};
