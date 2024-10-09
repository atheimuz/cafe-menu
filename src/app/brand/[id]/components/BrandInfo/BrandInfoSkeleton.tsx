import OptionsSkeleton from "@/app/brand/[id]/components/Options/OptionsSkeleton";
import BrandNameSkeleton from "@/app/brand/[id]/components/BrandName/BrandNameSkeleton";

const BrandInfoSkeleton = () => {
    return (
        <>
            <BrandNameSkeleton />
            <OptionsSkeleton />
        </>
    );
};

export default BrandInfoSkeleton;
