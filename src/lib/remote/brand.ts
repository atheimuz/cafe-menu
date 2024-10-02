import client from "@/lib/remote/client";
import { IBrand } from "@/models/brand";

export const getBrandsAPI = async (brandId: string) => {
    const res = await client.get("/api/brands");
    const data: { list: IBrand[] } = res.data;

    return data;
};

export const getBrandAPI = async (brandId: string) => {
    const res = await client.get(`/api/brand/${brandId}`);
    const data: IBrand = res.data;

    return data;
};
