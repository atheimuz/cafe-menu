export const convertBrandName = (name: string) => {
    switch (name) {
        case "starbucks":
            return "스타벅스";
        case "twosomeplace":
            return "투썸플레이스";
        case "hollys":
            return "할리스";
        case "ediya":
            return "이디야";
        case "megacoffee":
            return "메가커피";
        case "composecoffee":
            return "컴포즈커피";
        case "mammothcoffee":
            return "매머드커피";
        case "paikscoffee":
            return "빽다방";
        default:
            return name;
    }
};

export const convertOption = (option: string) => {
    switch (option) {
        case "caffeine":
            return "카페인";
        case "decaf":
            return "디카페인";
        case "halfDecaf":
            return "1/2 디카페인";
        case "milk":
            return "우유";
        case "lowFat":
            return "저지방";
        case "fatless":
            return "무지방";
        case "soyMilk":
            return "두유";
        case "oats":
            return "오트(귀리)";
        default:
            return option;
    }
};
