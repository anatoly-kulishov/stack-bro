import { RefObject, useEffect, useState } from 'react';

// ToDo: Fix these any!
export function useResize(ref: RefObject<any>, isFullscreenView: any) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleResize = () => {
    if (!ref?.current) {
      return;
    }

    const currentParams = ref.current.getBoundingClientRect();

    setWidth(currentParams.width);
    setHeight(currentParams.height);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref]);

  useEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFullscreenView]);

  useEffect(() => {
    handleResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { width, height };
}
