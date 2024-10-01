"use client";

import { useState } from "react";
import { Tab } from "@atheimuz/react-ui";
import MenuItem from "@/components/MenuItem";
import data from "@/app/menu/menuList.json";
import styles from "./FilteredMenuList.module.scss";

const FilteredMenuList = () => {
    const [tab, setTab] = useState("zero");

    return (
        <div className={styles.wrapper}>
            <Tab
                value={tab}
                onChange={(val) => setTab(val)}
                className={styles.tab}
            >
                <Tab.Item value="zero">제로/저당</Tab.Item>
                <Tab.Item value="lowkcal">저칼로리</Tab.Item>
                <Tab.Item value="decaffein">디카페인</Tab.Item>
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
