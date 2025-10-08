import { Skeleton } from "@/components/ui/skeleton";

const BrandNameSkeleton = () => {
    return (
        <div className="flex items-center gap-3 px-4 py-5">
            <Skeleton className="h-10 w-10 rounded-full" />
            <Skeleton className="h-5 w-32" />
        </div>
    );
};

export default BrandNameSkeleton;
