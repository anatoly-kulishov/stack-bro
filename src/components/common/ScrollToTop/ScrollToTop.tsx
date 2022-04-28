import React, { ReactElement, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface IScrollToTop {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: ReactElement<any, any>;
}

export const ScrollToTop = ({ children }: IScrollToTop) => {
  const location = useLocation();

  const lastCharInPathName = useMemo(() => {
    return location.pathname[location.pathname.length - 1];
  }, [location.pathname]);

  useEffect(() => {
    if (window.scrollY > 0 && lastCharInPathName !== '/') {
      setTimeout(() => window.scrollTo({ top: 0, behavior: 'auto' }), 0);
    }
  }, [lastCharInPathName]);

  return <>{children}</>;
};
