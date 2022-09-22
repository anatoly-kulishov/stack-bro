import React, { FC, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { IScrollToTop } from './ScrollToTop.props';
import { AppRoutesEnum } from '../../../shared/types/routes.types';

const TOP_COORDINATE: ScrollToOptions | undefined = { top: 0, behavior: 'auto' };

export const ScrollToTop: FC<IScrollToTop> = ({ children }) => {
  const location = useLocation();

  const lastCharInPathName = useMemo(() => {
    return location.pathname[location.pathname.length - 1];
  }, [location.pathname]);

  useEffect(() => {
    if (window.scrollY > 0 && lastCharInPathName !== AppRoutesEnum.HOME) {
      setTimeout(() => window.scrollTo(TOP_COORDINATE), 0);
    }
  }, [lastCharInPathName]);

  return <>{children}</>;
};
