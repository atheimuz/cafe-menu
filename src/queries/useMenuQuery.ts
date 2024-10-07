import {
    useSuspenseQuery,
    useSuspenseInfiniteQuery
} from "@tanstack/react-query";
import { getMenuAPI, getMenusAPI } from "@/lib/remote/menu";

export const MENU_QUERY_KEY = "menu";
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

export const useMenu = (menuId: string) => {
    return useSuspenseQuery({
        queryKey: [MENU_QUERY_KEY, menuId],
        queryFn: () => getMenuAPI(menuId)
    });
};
