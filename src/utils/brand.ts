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
