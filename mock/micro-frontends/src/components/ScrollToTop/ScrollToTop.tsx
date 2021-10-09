import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = (props: any) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({top: 0, behavior: 'auto'});
    }, [location]);

    return <>{props.children}</>
};

export default ScrollToTop;
