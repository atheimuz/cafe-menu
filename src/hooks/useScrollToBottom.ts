import { useEffect, useState } from "react";
import { throttle } from "@/utils/common";

const useScrollToBottom = (): boolean => {
    const [isBottom, setIsBottom] = useState(false);

    const handleScroll = throttle(() => {
        const scrollPosition = window.innerHeight + window.scrollY;
        const bottomPosition = document.body.offsetHeight;

        if (scrollPosition >= bottomPosition - 100) {
            setIsBottom(true);
        } else {
            setIsBottom(false);
        }
    }, 300);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return isBottom;
};

export default useScrollToBottom;
