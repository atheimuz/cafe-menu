import { useSuspenseQuery } from "@tanstack/react-query";
import { getBrandsAPI, getBrandAPI } from "@/lib/remote/brand";

export const BRANDS_QUERY_KEY = "brands";
export const BRAND_QUERY_KEY = "brand";

export const useBrands = () => {
    return useSuspenseQuery({
        queryKey: [BRANDS_QUERY_KEY],
        queryFn: getBrandsAPI
    });
};

export const useBrand = (brandId: string) => {
    return useSuspenseQuery({
        queryKey: [BRAND_QUERY_KEY, brandId],
        queryFn: () => getBrandAPI(brandId)
    });
};
