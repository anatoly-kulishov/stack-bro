import React, { ReactElement, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

type ScrollToTopType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any, any>;
};

const TOP_COORDINATE: ScrollToOptions | undefined = { top: 0, behavior: 'auto' };

export const ScrollToTop = ({ children }: ScrollToTopType) => {
  const location = useLocation();

  const lastCharInPathName = useMemo(() => {
    return location.pathname[location.pathname.length - 1];
  }, [location.pathname]);

  useEffect(() => {
    if (window.scrollY > 0 && lastCharInPathName !== '/') {
      setTimeout(() => window.scrollTo(TOP_COORDINATE), 0);
    }
  }, [lastCharInPathName]);

  return <>{children}</>;
};
