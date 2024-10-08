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
            return "오트(귀리) 밀크";
        case "almond":
            return "아몬드 밀크";
        case "sugar":
            return "당";
        case "stevia":
            return "스테비아";
        case "almond":
            return "아몬드 시럽";
        case "honey":
            return "꿀";
        case "caramel":
            return "카라멜 시럽";
        case "vanilla":
            return "바닐라 시럽";
        case "lightVanilla":
            return "라이트 바닐라 시럽";
        case "hazelnut":
            return "헤이즐넛 시럽";
        default:
            return option;
    }
};
