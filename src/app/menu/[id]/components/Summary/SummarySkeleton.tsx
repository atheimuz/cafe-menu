import { Skeleton } from "@/components/ui/skeleton";

const SummarySkeleton = () => {
    return (
        <div className="flex items-start gap-4 px-4 py-5">
            <Skeleton className="h-[100px] w-[100px] rounded-2xl shrink-0" />
            <div className="flex-1 pt-1 space-y-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-5 w-40" />
                <Skeleton className="h-3 w-32" />
                <Skeleton className="h-5 w-16 rounded-full" />
            </div>
        </div>
    );
};

export default SummarySkeleton;
