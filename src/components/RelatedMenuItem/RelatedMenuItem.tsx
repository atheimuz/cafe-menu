import Link from "next/link";
import { convertRelatedType, convertRelatedTypeTagColor } from "@/utils/menu";
import { Badge } from "@/components/ui/badge";

interface Props {
    type: "ice" | "hot" | "sizeUp" | "sizeDown" | "decaf" | "caf";
    menu: {
        _id: string;
        name: string;
        thumbnail: string;
    };
}

const tagVariantMap: Record<string, "pastelBlue" | "pastelRed" | "pastelGreen" | "pastelYellow"> = {
    blue: "pastelBlue",
    red: "pastelRed",
    green: "pastelGreen",
    yellow: "pastelYellow"
};

const RelatedMenuItem = ({ type, menu }: Props) => {
    const colorKey = convertRelatedTypeTagColor(type);
    const variant = tagVariantMap[colorKey] || "pastelGreen";

    return (
        <Link
            href={`/menu/${menu?._id}`}
            className="flex flex-col items-center gap-2 w-20 shrink-0"
        >
            <img
                src={menu?.thumbnail}
                className="w-16 h-16 rounded-2xl object-cover shadow-soft-sm"
                alt={menu?.name}
            />
            <Badge variant={variant} className="text-[10px] px-1.5">
                {convertRelatedType(type)}
            </Badge>
            <p className="text-xs text-center leading-tight line-clamp-2">
                {menu?.name}
            </p>
        </Link>
    );
};

export default RelatedMenuItem;
