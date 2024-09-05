import { useEffect, useState } from "react";

export const useScreenSize = ()=> {

    const [width, setWidth] = useState<number>(window.innerWidth);

    const isMobile = width < 760;
    const isTablet = width < 1020;
    const isDesktop = width >= 1020;

    useEffect(()=> {
        window.addEventListener("resize", ()=> {
            const innerWidth = window.innerWidth;
            setWidth(innerWidth);
        })
    }, []);

    return {
        isMobile,
        isTablet,
        isDesktop,
    }

}