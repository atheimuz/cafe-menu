import { Skeleton } from "@/components/ui/skeleton";

const RelatedMenuItemSkeleton = () => {
    return (
        <div className="flex flex-col items-center gap-2 w-20 shrink-0">
            <Skeleton className="w-16 h-16 rounded-2xl" />
            <Skeleton className="h-3 w-12" />
            <Skeleton className="h-3 w-14" />
        </div>
    );
};

export default RelatedMenuItemSkeleton;
