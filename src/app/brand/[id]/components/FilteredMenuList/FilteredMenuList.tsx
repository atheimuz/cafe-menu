"use client";

import { useParams, useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Tab } from "@atheimuz/react-ui";
import MenuItem from "@/components/MenuItem";
import { useMenus } from "@/queries/useMenuQuery";
import styles from "./FilteredMenuList.module.scss";
import { IMenuItem } from "@/models/menu";
import { MENU_CATEGORY_LIST } from "@/schema/menu";
import MenuItemEmpty from "@/components/MenuItemEmpty";

const FilteredMenuList = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const params = useParams();
    const category =
        searchParams.get("category") || MENU_CATEGORY_LIST[0].value;
    const brandId = typeof params.id === "string" ? params.id : "";

    const { data } = useMenus({ brandId, category });

    const handleSearch = (newCategory: string) => {
        const currentParams = new URLSearchParams(searchParams.toString());
        currentParams.set("category", newCategory);

        router.replace(`?${currentParams.toString()}`);
    };

    // todo: isFetching
    return (
        <div className={styles.wrapper}>
            <Tab value={category} onChange={(val: string) => handleSearch(val)}>
                {MENU_CATEGORY_LIST.map((item) => (
                    <Tab.Item value={item.value} key={item.value}>
                        {item.label}
                    </Tab.Item>
                ))}
            </Tab>
            {data?.list?.length > 0 ? (
                <ul className={styles.items}>
                    {data.list.map((item: IMenuItem) => (
                        <li className={styles.item} key={item._id}>
                            <MenuItem {...item} />
                        </li>
                    ))}
                </ul>
            ) : (
                <MenuItemEmpty />
            )}
        </div>
    );
};

export default FilteredMenuList;
