"use client";

import ItemTitle from "@/components/ItemTitle";
import MenuItem from "@/components/MenuItem";
import { useMenus } from "@/queries/useMenuQuery";
import styles from "./SearchedList.module.scss";
import { IMenu } from "@/models/menu";

const SearchedList = () => {
    const { data } = useMenus();

    return (
        <div className={styles.wrapper}>
            <ItemTitle>검색 결과</ItemTitle>
            <ul className={styles.items}>
                {data?.list?.map((item: IMenu) => (
                    <li className={styles.item} key={item._id}>
                        <MenuItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchedList;
