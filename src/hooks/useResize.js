import {useEffect, useState} from "react";

function useResize(ref: any, isFullscreenView: any) {
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
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [ref]);

    useEffect(() => {
        handleResize();
    }, [isFullscreenView]);

    useEffect(() => {
        handleResize();
    }, []);

    return {width, height};
}