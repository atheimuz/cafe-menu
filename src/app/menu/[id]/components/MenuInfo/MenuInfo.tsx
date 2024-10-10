import { Suspense } from "react";
import { getMenuAPI } from "@/lib/remote/menu";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import Summary from "@/app/menu/[id]/components/Summary";
import Detail from "@/app/menu/[id]/components/Detail";
import DetailSkeleton from "@/app/menu/[id]/components/Detail/DetailSkeleton";
import SummarySkeleton from "@/app/menu/[id]/components/Summary/SummarySkeleton";
import RelatedMenuList from "@/app/menu/[id]/components/RelatedMenuList";
import RelatedMenuListSkeleton from "@/app/menu/[id]/components/RelatedMenuList/RelatedMenuListSkeleton";
import Report from "@/app/menu/[id]/components/Report";
import Price from "@/app/menu/[id]/components/Price";
import styles from "./MenuInfo.module.scss";

export interface Props {
    id: string;
}
const MenuInfo = async ({ id }: Props) => {
    const data = await getMenuAPI(id);

    if ("error" in data) {
        return <ErrorMessage>메뉴 정보를 불러오지 못했어요</ErrorMessage>;
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
