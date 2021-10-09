import {useState} from "react";

function useHover() {
    const [isHovered, setIsHovered] = useState<boolean>(false);

    const eventHandlers = {
        onMouseOver: () => setIsHovered(true),
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
    };

    return [
        isHovered,
        eventHandlers,
    ];
}

export default useHover;