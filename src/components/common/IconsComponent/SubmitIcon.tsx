import React, { FC } from 'react';

type SubmitIconPropsType = {
  size?: string;
};

export const SubmitIcon: FC<SubmitIconPropsType> = ({ size = '24px' }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="none">
      <g stroke="#a1a1aa" strokeWidth="2" strokeLinejoin="round">
        <path d="M21.137 11.733L3 20.466l3.359-8.733L3 3l18.137 8.733z" fill="#fff" />
        <path d="M21.137 11.733H6.359" strokeLinecap="round" />
      </g>
      <defs />
    </svg>
  );
};
