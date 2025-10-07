import BrandInfoSkeleton from "@/app/brand/[id]/components/BrandInfo/BrandInfoSkeleton";
import Loading from "@/components/Loading";

export default function BrandDetailLoading() {
    return (
        <>
            <BrandInfoSkeleton />
            <Loading />
        </>
    );
}
