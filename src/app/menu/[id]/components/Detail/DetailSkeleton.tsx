import { Skeleton } from "@/components/ui/skeleton";
import PriceSkeleton from "@/app/menu/[id]/components/Price/PriceSkeleton";

const DetailSkeleton = () => {
    return (
        <div className="px-4 py-4 space-y-4">
            <div className="space-y-1.5">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-4/5" />
                <Skeleton className="h-3 w-3/5" />
            </div>
            <PriceSkeleton />
        </div>
    );
};

export default DetailSkeleton;
