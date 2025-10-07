import { IMenu, IMenuItem } from "@/models/menu";
import { filterQuery } from "@/utils/common";

export const getMenusAPI = async (
    query: {
        [key: string]: string | number | undefined;
    } = {}
) => {
    const queryString = new URLSearchParams(filterQuery(query)).toString();
    const url = `${process.env.NEXT_PUBLIC_API_URI}/api/menus?${queryString}`;
    const res = await fetch(url, {
        next: { revalidate: 1800 }
    }).then((res) => {
        return res.json();
    });

    const data: { totalCounts: number; list: IMenuItem[] } = res.data;

    return data;
};

export const getMenuAPI = async (menuId: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/api/menu/${menuId}`,
        { next: { revalidate: 1800 } }
    );

    if (!res.ok) {
        throw new Error(`메뉴 정보 요청 실패: ${res.status}`);
    }

    const resJson = await res.json();
    const data: IMenu = resJson.data;

    return data;
};
