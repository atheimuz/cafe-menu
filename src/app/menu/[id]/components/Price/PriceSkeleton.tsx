import { Skeleton } from "@/components/ui/skeleton";
import ItemTitle from "@/components/ItemTitle";

const PriceSkeleton = () => {
    return (
        <div>
            <ItemTitle>가격</ItemTitle>
            <div className="space-y-1.5">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
        </div>
    );
};

export default PriceSkeleton;
