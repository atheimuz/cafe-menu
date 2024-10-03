export const convertRelatedType = (type: string): string => {
    switch (type) {
        case "ice":
            return "아이스";
        case "hot":
            return "핫";
        case "sizeUp":
            return "사이즈 업";
        case "sizeDown":
            return "사이즈 다운";
        case "caf":
            return "카페인";
        case "decaf":
            return "디카페인";
        default:
            return type;
    }
};
