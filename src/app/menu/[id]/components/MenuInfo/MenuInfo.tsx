"use client";

import { useMenu } from "@/queries/useMenuQuery";
import Detail from "@/app/menu/[id]/components/Detail";
import Summary from "@/app/menu/[id]/components/Summary";
import RelatedMenuList from "@/app/menu/[id]/components/RelatedMenuList";
import Report from "@/app/menu/[id]/components/Report";
import Price from "@/app/menu/[id]/components/Price";
import styles from "./MenuInfo.module.scss";

interface Props {
    id: string;
}
const MenuInfo = ({ id }: Props) => {
    const { data, isFetching } = useMenu(id);
    if (isFetching) {
        // todo: skeleton
        return null;
    }

    if (!data) {
        // todo: error component
        return null;
    }
    return (
        <div className={styles.wrapper}>
            <Summary
                name={data?.name}
                name_en={data?.name_en}
                thumbnail={data?.thumbnail}
                brand={data?.brand}
            />
            <RelatedMenuList items={data?.relatedMenus} />
            <Detail
                type={data?.type}
                desc={data?.desc}
                allergies={data?.allergies}
            />
            <Price prices={data?.prices} />
            <Report report={data?.report} />
        </div>
    );
};

export default MenuInfo;
