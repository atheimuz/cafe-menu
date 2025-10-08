import ItemTitle from "@/components/ItemTitle";
import RelatedMenuItem from "@/components/RelatedMenuItem";

interface Props {
    items?: {
        type: "ice" | "hot" | "sizeUp" | "sizeDown" | "decaf" | "caf";
        menu: {
            _id: string;
            name: string;
            thumbnail: string;
        };
    }[];
}
const RelatedMenuList = ({ items }: Props) => {
    if (!items || !items.length) return null;
    return (
        <div className="px-4 py-4">
            <ItemTitle>연관 상품</ItemTitle>
            <div className="overflow-x-auto -mx-4 px-4">
                <div className="flex gap-4">
                    {items.map((item) => (
                        <RelatedMenuItem key={item.menu._id} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RelatedMenuList;
