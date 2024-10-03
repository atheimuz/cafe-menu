"use client";

import { IMenuItem } from "@/models/menu";
import { useMenus } from "@/queries/useMenuQuery";
import ItemTitle from "@/components/ItemTitle";
import MenuItem from "@/components/MenuItem";
import Empty from "@/app/search/components/Empty";
import styles from "./SearchedList.module.scss";

interface Props {
    keyword?: string;
}
const SearchedList = ({ keyword }: Props) => {
    const { data } = useMenus({ name: keyword });

    if (!data?.list?.length) {
        return <Empty />;
    }

    return (
        <div className={styles.wrapper}>
            <ItemTitle>검색 결과</ItemTitle>
            <ul className={styles.items}>
                {data.list.map((item: IMenuItem) => (
                    <li className={styles.item} key={item._id}>
                        <MenuItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchedList;
