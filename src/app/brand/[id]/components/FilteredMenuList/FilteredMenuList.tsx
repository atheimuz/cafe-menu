"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { useParams, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useMenus } from "@/queries/useMenuQuery";
import { IMenuItem } from "@/models/menu";
import { MENU_CATEGORY_LIST } from "@/schema/menu";
import useScrollToBottom from "@/hooks/useScrollToBottom";
import Loading from "@/components/Loading";
import MenuItem from "@/components/MenuItem";
import MenuItemEmpty from "@/components/MenuItemEmpty";
import styles from "./FilteredMenuList.module.scss";

const Tab = dynamic(() => import("@atheimuz/react-ui").then((mod) => mod.Tab), {
    ssr: false
});

const TabItem = dynamic(
    () => import("@atheimuz/react-ui").then((mod) => mod.Tab.Item),
    { ssr: false }
);

const FilteredMenuList = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();
    const category =
        searchParams.get("category") || MENU_CATEGORY_LIST[0].value;
    const brandId = typeof params.id === "string" ? params.id : "";
    const isBottom = useScrollToBottom();

    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useMenus({
        brandId,
        category,
        limit: 20
    });

    const handleSearch = (newCategory: string) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set("category", newCategory);

        router.replace(`?${currentParams.toString()}`);
    };

    useEffect(() => {
        if (isBottom && hasNextPage) {
            fetchNextPage();
        }
    }, [isBottom]);

    return (
        <div className={styles.wrapper}>
            <Tab value={category} onChange={(val: string) => handleSearch(val)}>
                {MENU_CATEGORY_LIST.map((item) => (
                    <TabItem value={item.value} key={item.value}>
                        {item.label}
                    </TabItem>
                ))}
            </Tab>
            {data.pages[0]?.list?.length > 0 ? (
                <ul className={styles.items}>
                    {data.pages.map((page) =>
                        page?.list?.map((item: IMenuItem) => (
                            <li className={styles.item} key={item._id}>
                                <MenuItem {...item} />
                            </li>
                        ))
                    )}
                </ul>
            ) : (
                <MenuItemEmpty />
            )}
            {isFetchingNextPage && <Loading />}
        </div>
    );
};

export default FilteredMenuList;
