"use client";

import { useState } from "react";
import { Tab } from "@atheimuz/react-ui";
import MenuItem from "@/components/MenuItem";
import data from "@/app/menu/menuList.json";
import styles from "./FilteredMenuList.module.scss";

const FilteredMenuList = () => {
    const [tab, setTab] = useState("coffee");
    return (
        <div>
            <Tab value={tab} onChange={(val) => setTab(val)}>
                <Tab.Item value="coffee">커피</Tab.Item>
                <Tab.Item value="coldbrew">콜드브루</Tab.Item>
                <Tab.Item value="tea">티</Tab.Item>
                <Tab.Item value="juice">주스</Tab.Item>
                <Tab.Item value="drink">음료</Tab.Item>
            </Tab>
            <ul className={styles.items}>
                {data.items.map((item) => (
                    <li className={styles.item} key={item.name}>
                        <MenuItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilteredMenuList;
