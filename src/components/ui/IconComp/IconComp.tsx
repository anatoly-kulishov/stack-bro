import React, { FC } from 'react';

import { IconCompProps, icons } from './IconComp.props';

export const IconComp: FC<IconCompProps> = ({ icon, className, ...props }) => {
  const IconComponent = icons[icon];
  return <IconComponent {...props} />;
};
