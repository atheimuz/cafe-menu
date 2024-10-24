export const convertRelatedType = (type: string): string => {
    switch (type) {
        case "ice":
            return "차가운 음료";
        case "hot":
            return "따뜻한 음료";
        case "sizeUp":
            return "사이즈 증가";
        case "sizeDown":
            return "사이즈 감소";
        case "caf":
            return "카페인 증가";
        case "decaf":
            return "카페인 감소";
        case "sugarDown":
            return "당류 감소";
        case "sugarUp":
            return "당류 증가";
        default:
            return type;
    }
};

export const convertRelatedTypeTagColor = (
    type: string
): "blue" | "red" | "green" | "yellow" | "orange" | "green" | "gray" => {
    switch (type) {
        case "ice":
            return "blue";
        case "hot":
            return "red";
        case "sizeUp":
        case "sizeDown":
            return "green";
        case "caf":
        case "decaf":
            return "yellow";
        case "sugarDown":
        case "sugarUp":
            return "orange";
        default:
            return "gray";
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
        case "sugar":
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
        case "pineNut":
            return "잣";
        default:
            return allergy;
    }
};
