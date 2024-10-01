import { useSuspenseQuery } from "@tanstack/react-query";
import { getBrandAPI } from "@/lib/remote/brand";

export const BRAND_QUERY_KEY = "brand";

export const useBrand = (brandId: string) => {
    return useSuspenseQuery({
        queryKey: [BRAND_QUERY_KEY, brandId],
        queryFn: () => getBrandAPI(brandId)
    });
};
