import { useState } from 'react';

export function useHover() {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const eventHandlers = {
    onMouseOver: () => setIsHovered(true),
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
  };

  return [isHovered, eventHandlers];
}
