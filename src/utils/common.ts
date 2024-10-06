export const numberWithCommas = (number: number) => {
    return number.toLocaleString();
};

export const throttle = (fn: (...args: unknown[]) => void, delay: number) => {
    let lastCall = 0;

    return function (...args: unknown[]) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn(...args);
        }
    };
};
