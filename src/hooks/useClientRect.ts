import { SetStateAction, useCallback, useState } from 'react';

export function useClientRect() {
  const [clientRect, setClientRect] = useState(null);

  const ref = useCallback((elm: { getBoundingClientRect: () => SetStateAction<null> } | null) => {
    if (elm === null) {
      return;
    }

    setClientRect(elm.getBoundingClientRect());
  }, []);

  return [clientRect, ref];
}
