import client from "@/lib/remote/client";
import { IMenu } from "@/models/menu";

export const getMenusAPI = async (query = {}) => {
    const res = await client.get("/api/menus", { params: query });
    const data: { list: IMenu[] } = res.data;

    return data;
};

export const getMenuAPI = async (menuId: string) => {
    const res = await client.get(`/api/menu/${menuId}`);
    const data: IMenu = res.data;

    return data;
};
