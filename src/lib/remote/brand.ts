import { IBrand } from "@/models/brand";

export const getBrandsAPI = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/api/brands`
        );
        const resJson = await res.json();
        const data: { list: IBrand[] } = resJson.data;

        return data;
    } catch (e) {
        return {
            error: e instanceof Error ? e.message : "An unknown error occurred"
        };
    }
};

export const getBrandAPI = async (brandId: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/api/brand/${brandId}`
        );
        const resJson = await res.json();
        const data: IBrand = resJson.data;

        return data;
    } catch (e) {
        return {
            error: e instanceof Error ? e.message : "An unknown error occurred"
        };
    }
};
