import { Suspense } from "react";
import Loading from "@/components/Loading";
import Summary from "@/app/menu/[id]/components/Summary";
import Detail from "@/app/menu/[id]/components/Detail";
import DetailSkeleton from "@/app/menu/[id]/components/Detail/DetailSkeleton";
import SummarySkeleton from "@/app/menu/[id]/components/Summary/SummarySkeleton";
import RelatedMenuList from "@/app/menu/[id]/components/RelatedMenuList";
import RelatedMenuListSkeleton from "@/app/menu/[id]/components/RelatedMenuList/RelatedMenuListSkeleton";
import Report from "@/app/menu/[id]/components/Report";
import Price from "@/app/menu/[id]/components/Price";
import styles from "./MenuInfo.module.scss";
import { IMenu } from "@/models/menu";

export interface Props {
    data: IMenu;
}
const MenuInfo = async ({ data }: Props) => {
    if (!data) {
        // todo: error component
        //     return null;
    }
    return (
        <div className={styles.wrapper}>
            <Suspense fallback={<SummarySkeleton />}>
                <Summary
                    type={data?.type}
                    name={data?.name}
                    name_en={data?.name_en}
                    thumbnail={data?.thumbnail}
                    brand={data?.brand}
                />
            </Suspense>
            <Suspense fallback={<RelatedMenuListSkeleton />}>
                <RelatedMenuList items={data?.relatedMenus} />
            </Suspense>
            <Suspense fallback={<DetailSkeleton />}>
                <Detail
                    desc={data?.desc}
                    cautions={data?.cautions}
                    allergies={data?.allergies}
                >
                    <Price prices={data?.prices} />
                </Detail>
            </Suspense>
            <Suspense fallback={<Loading />}>
                <Report brandName={data?.brand?.name} report={data?.report} />
            </Suspense>
        </div>
    );
};
export default MenuInfo;
