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
