import { IMenu, IMenuItem } from "@/models/menu";
import { filterQuery } from "@/utils/common";

export const getMenusAPI = async (
    query: {
        [key: string]: string | number | undefined;
    } = {}
) => {
    const queryString = new URLSearchParams(filterQuery(query)).toString();
    const url = `${process.env.NEXT_PUBLIC_API_URI}/api/menus?${queryString}`; // 최종 URL 생성
    const res = await fetch(url).then((res) => {
        return res.json();
    });

    const data: { totalCounts: number; list: IMenuItem[] } = res.data;

    return data;
};

export const getMenuAPI = async (menuId: string) => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URI}/api/menu/${menuId}`
        );
        const resJson = await res.json();
        console.log("json::", resJson);
        const data: IMenu = resJson.data;

        return data;
    } catch (e) {
        console.log("e::", e);
        return {
            error: e instanceof Error ? e.message : "An unknown error occurred"
        };
    }
};
