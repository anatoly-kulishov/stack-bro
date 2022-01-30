import { useCallback, useState } from 'react';

function useClientRect() {
  const [clientRect, setClientRect] = useState(null);

  const ref = useCallback(elm => {
    if (elm === null) {
      return;
    }

    setClientRect(elm.getBoundingClientRect());
  }, []);

  return [clientRect, ref];
}

export default useClientRect;
