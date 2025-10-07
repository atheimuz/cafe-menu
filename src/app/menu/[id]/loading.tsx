import SummarySkeleton from "@/app/menu/[id]/components/Summary/SummarySkeleton";
import RelatedMenuListSkeleton from "@/app/menu/[id]/components/RelatedMenuList/RelatedMenuListSkeleton";
import DetailSkeleton from "@/app/menu/[id]/components/Detail/DetailSkeleton";

export default function MenuDetailLoading() {
    return (
        <>
            <SummarySkeleton />
            <RelatedMenuListSkeleton />
            <DetailSkeleton />
        </>
    );
}
