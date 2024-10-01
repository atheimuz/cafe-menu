"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Tab } from "@atheimuz/react-ui";
import MenuItem from "@/components/MenuItem";
import { useMenus } from "@/queries/useMenuQuery";
import styles from "./FilteredMenuList.module.scss";
import { IMenuItem } from "@/models/menu";
import MenuItemEmpty from "@/components/MenuItemEmpty";

const FilteredMenuList = () => {
    const params = useParams();
    const brandId = typeof params.id === "string" ? params.id : "";

    const [tab, setTab] = useState<string>("coffee");
    const { data, isFetching } = useMenus({ brandId, category: tab });

    // todo: isFetching
    return (
        <div className={styles.wrapper}>
            <Tab value={tab} onChange={(val: string) => setTab(val)}>
                <Tab.Item value="coffee">커피</Tab.Item>
                <Tab.Item value="coldbrew">콜드브루</Tab.Item>
                <Tab.Item value="tea">티</Tab.Item>
                <Tab.Item value="juice">주스</Tab.Item>
                <Tab.Item value="drink">음료</Tab.Item>
            </Tab>
            {data?.list?.length > 0 ? (
                <ul className={styles.items}>
                    {data.list.map((item: IMenuItem) => (
                        <li className={styles.item} key={item.name}>
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
