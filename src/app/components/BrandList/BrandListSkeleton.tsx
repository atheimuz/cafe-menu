import { Skeleton } from "@/components/ui/skeleton";

const BrandListSkeleton = () => {
    return (
        <div className="px-4 mt-4">
            <ul className="grid grid-cols-2 gap-3">
                {new Array(8).fill(0).map((_, index) => (
                    <li key={index}>
                        <Skeleton className="h-[72px] rounded-2xl" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandListSkeleton;
