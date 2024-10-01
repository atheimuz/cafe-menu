import axios from "axios";
import { IMenu } from "@/models/menu";

export const getMenusAPI = async () => {
    const res = await axios.get("/api/menus");
    const data: IMenu[] = res.data;

    return data;
};

export const getMenuAPI = async (menuId: string) => {
    const res = await axios.get(`/api/menu/${menuId}`);
    const data: IMenu = res.data;

    return data;
};
