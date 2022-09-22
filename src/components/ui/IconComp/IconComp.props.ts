import { DetailedHTMLProps, SVGAttributes } from 'react';

import { SpinnerIcon } from './Icons/SpinnerIcon';
import { SubmitIcon } from './Icons/SubmitIcon';
import { UpIcon } from './Icons/UpIcon';
import { EyeIcon } from './Icons/EyeIcon';

export const icons = {
  SpinnerIcon,
  SubmitIcon,
  EyeIcon,
  UpIcon,
};

export type IconName = keyof typeof icons;

export interface IconCompProps extends DetailedHTMLProps<SVGAttributes<SVGElement>, SVGElement> {
  icon: IconName;
  size?: string | number;
}

export interface IconComponent {
  fill?: string;
  size?: string | number;
}
