import { Skeleton } from "@/components/ui/skeleton";
import ItemTitle from "@/components/ItemTitle";

const OptionsSkeleton = () => {
    return (
        <div className="px-4 pb-4">
            <ItemTitle>옵션 제공</ItemTitle>
            <div className="flex gap-3">
                {[0, 1].map((number) => (
                    <Skeleton key={number} className="h-24 w-[140px] rounded-2xl shrink-0" />
                ))}
            </div>
        </div>
    );
};

export default OptionsSkeleton;
