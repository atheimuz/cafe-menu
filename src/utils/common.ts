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

interface QueryParams {
    [key: string]: string | number | undefined;
}

export const filterQuery = (query: QueryParams): [string, string][] => {
    return Object.entries(query).filter(([, value]) => value !== undefined) as [
        string,
        string
    ][];
};
