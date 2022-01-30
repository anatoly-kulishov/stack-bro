import React from 'react';
import { useSelector } from 'react-redux';

import { Mock } from '../common/Mock/Mock';
import { getAppState } from '../../store/selectors/app-selectors';

export const Help: React.FC = () => {
  const { theme } = useSelector(getAppState);

  return (
    <section className={`default-box default-box--${theme}`}>
      <Mock />
    </section>
  );
};
