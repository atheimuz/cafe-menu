import { useQuery } from "@tanstack/react-query";
import { getMenuAPI, getMenusAPI } from "@/lib/remote/menu";

export const MENU_QUERY_KEY = "menu";
export const MENUS_QUERY_KEY = "menus";

export const useMenus = ({
    brandId,
    category,
    name
}: {
    brandId?: string;
    category?: string;
    name?: string;
} = {}) => {
    return useQuery({
        queryKey: [MENUS_QUERY_KEY, name, brandId, category],
        queryFn: () => getMenusAPI({ brandId, category, name })
    });
};

export const useMenu = (menuId: string) => {
    return useQuery({
        queryKey: [MENU_QUERY_KEY, menuId],
        queryFn: () => getMenuAPI(menuId),
        enabled: !!menuId
    });
};
