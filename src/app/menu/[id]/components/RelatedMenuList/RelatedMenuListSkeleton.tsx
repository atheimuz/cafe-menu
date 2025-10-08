import ItemTitle from "@/components/ItemTitle";
import RelatedMenuItemSkeleton from "@/components/RelatedMenuItem/RelatedMenuItemSkeleton";

const RelatedMenuListSkeleton = () => {
    return (
        <div className="px-4 py-4">
            <ItemTitle>연관 상품</ItemTitle>
            <div className="flex gap-4">
                {[0, 1].map((item) => (
                    <RelatedMenuItemSkeleton key={item} />
                ))}
            </div>
        </div>
    );
};

export default RelatedMenuListSkeleton;
