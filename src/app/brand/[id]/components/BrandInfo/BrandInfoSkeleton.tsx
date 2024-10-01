import { OptionsSkeleton } from "@/app/brand/[id]/components/Options";
import { BrandNameSkeleton } from "@/app/brand/[id]/components/BrandName";

const BrandInfoSkeleton = () => {
    return (
        <>
            <BrandNameSkeleton />
            <OptionsSkeleton />
        </>
    );
};

export default BrandInfoSkeleton;
