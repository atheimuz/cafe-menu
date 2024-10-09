import { IBrand } from "@/models/brand";

export const getBrandsAPI = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/api/brands`
    ).then((res) => res.json());
    const data: { list: IBrand[] } = res.data;

    return data;
};

export const getBrandAPI = async (brandId: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/api/brand/${brandId}`
    ).then((res) => res.json());
    const data: IBrand = res.data;

    return data;
};
