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

export const convertTitleAndUnit = (
    key: string
): {
    title: string | null;
    unit: string | null;
} => {
    switch (key) {
        case "capacity":
            return { title: "용량", unit: "ml" };
        case "kcal":
            return { title: "칼로리", unit: "kcal" };
        case "sodium":
            return { title: "나트륨", unit: "mg" };
        case "sugars":
            return { title: "당류", unit: "g" };
        case "protein":
            return { title: "단백질", unit: "g" };
        case "caffeine":
            return { title: "카페인", unit: "mg" };
        case "cholesterol":
            return { title: "콜레스테롤", unit: "mg" };
        case "fat":
            return { title: "지방", unit: "g" };
        default:
            return { title: null, unit: null };
    }
};

export const convertCaution = (caution: string): string => {
    switch (caution) {
        case "zero":
            return "대체당을 과다 섭취할 경우 소화불량이나 기타 부작용이 발생할 수 있으니 적정량을 섭취하세요.";
        case "caffeine":
            return "고카페인 음료는 과도한 섭취 시 불면증이나 심박수 증가를 유발할 수 있으니 주의하세요.";
        default:
            return caution;
    }
};

export const convertAllergy = (allergy: string): string => {
    switch (allergy) {
        case "milk":
            return "우유";
        case "bean":
            return "대두";
        case "egg":
            return "달걀";
        case "wheat":
            return "밀";
        case "peach":
            return "복숭아";
        case "almond":
            return "아몬드";
        case "sulphuricAcid":
            return "아황산류";
        default:
            return allergy;
    }
};
