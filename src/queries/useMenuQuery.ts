import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getMenusAPI } from "@/lib/remote/menu";

export const MENUS_QUERY_KEY = "menus";

export const useMenus = ({
    brandId,
    category,
    name,
    limit
}: {
    brandId?: string;
    category?: string;
    name?: string;
    limit: number;
}) => {
    return useSuspenseInfiniteQuery({
        queryKey: [MENUS_QUERY_KEY, name, brandId, category],
        queryFn: async ({ pageParam }) =>
            getMenusAPI({ brandId, category, name, skip: pageParam, limit }),
        initialPageParam: 0,
        getNextPageParam: (lastPage, _, lastPageParam) => {
            const itemCounts = lastPageParam + lastPage.list.length;
            const totalCounts = lastPage.totalCounts;
            return itemCounts < totalCounts
                ? lastPageParam + lastPage.list.length
                : null;
        }
    });
};
