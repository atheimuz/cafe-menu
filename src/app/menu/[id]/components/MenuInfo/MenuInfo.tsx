import { Suspense } from "react";
import { getMenuAPI } from "@/lib/remote/menu";
import Loading from "@/components/Loading";
import Summary from "@/app/menu/[id]/components/Summary";
import Detail from "@/app/menu/[id]/components/Detail";
import DetailSkeleton from "@/app/menu/[id]/components/Detail/DetailSkeleton";
import SummarySkeleton from "@/app/menu/[id]/components/Summary/SummarySkeleton";
import RelatedMenuList from "@/app/menu/[id]/components/RelatedMenuList";
import RelatedMenuListSkeleton from "@/app/menu/[id]/components/RelatedMenuList/RelatedMenuListSkeleton";
import Report from "@/app/menu/[id]/components/Report";
import Price from "@/app/menu/[id]/components/Price";
import { Separator } from "@/components/ui/separator";

export interface Props {
    id: string;
}
const MenuInfo = async ({ id }: Props) => {
    const data = await getMenuAPI(id);

    return (
        <div>
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
            <Separator className="mx-4 w-auto" />
            <Suspense fallback={<DetailSkeleton />}>
                <Detail
                    desc={data?.desc}
                    cautions={data?.cautions}
                    allergies={data?.allergies}
                >
                    <Price prices={data?.prices} />
                </Detail>
            </Suspense>
            <Separator className="mx-4 w-auto" />
            <Suspense fallback={<Loading />}>
                <Report brandName={data?.brand?.name} report={data?.report} />
            </Suspense>
        </div>
    );
};
export default MenuInfo;
