"use client";

import { useEffect } from "react";
import { IMenuItem } from "@/models/menu";
import { useMenus } from "@/queries/useMenuQuery";
import useScrollToBottom from "@/hooks/useScrollToBottom";
import Loading from "@/components/Loading";
import ItemTitle from "@/components/ItemTitle";
import MenuItem from "@/components/MenuItem";
import Empty from "@/app/search/components/Empty";
import styles from "./SearchedList.module.scss";

interface Props {
    keyword?: string;
}
const SearchedList = ({ keyword }: Props) => {
    const isBottom = useScrollToBottom();
    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } = useMenus({
        name: keyword,
        limit: 20
    });

    useEffect(() => {
        if (isBottom && hasNextPage) {
            fetchNextPage();
        }
    }, [isBottom]);

    if (!data.pages.length) {
        return <Empty />;
    }

    return (
        <div className={styles.wrapper}>
            <ItemTitle>검색 결과</ItemTitle>
            <ul className={styles.items}>
                {data.pages.map((page) =>
                    page?.list?.map((item: IMenuItem) => (
                        <li className={styles.item} key={item._id}>
                            <MenuItem {...item} />
                        </li>
                    ))
                )}
            </ul>
            {isFetchingNextPage && <Loading />}
        </div>
    );
};

export default SearchedList;
