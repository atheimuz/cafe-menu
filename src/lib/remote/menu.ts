import client from "@/lib/remote/client";
import { IMenu, IMenuItem } from "@/models/menu";

export const getMenusAPI = async (query = {}) => {
    const res = await client.get("/api/menus", { params: query });
    const data: { totalCounts: number; list: IMenuItem[] } = res.data;

    return data;
};

export const getMenuAPI = async (menuId: string) => {
    const result = await fetch(
        `${process.env.API_URI}/api/menu/${menuId}`
    ).then((res) => {
        return res.json();
    });
    const data: IMenu = result.data;
    return data;
};
