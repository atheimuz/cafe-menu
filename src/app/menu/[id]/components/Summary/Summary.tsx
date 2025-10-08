import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { convertBrandName } from "@/utils/brand";
import { Badge } from "@/components/ui/badge";

interface Props {
    type: "ice" | "hot";
    name: string;
    name_en: string;
    thumbnail: string;
    brand: { _id: string; name: string };
}
const Summary = ({ type, name, name_en, thumbnail, brand }: Props) => {
    return (
        <div className="flex items-start gap-4 px-4 py-5">
            <Image
                src={thumbnail}
                className="rounded-2xl object-cover shrink-0 shadow-soft"
                width={100}
                height={100}
                alt="제품 사진"
            />
            <div className="flex-1 min-w-0 pt-1">
                <Link
                    className="inline-flex items-center gap-0.5 text-xs text-muted-foreground hover:text-foreground hover:underline transition-colors"
                    href={`/brand/${brand?._id}`}
                >
                    {convertBrandName(brand?.name)}
                    <ChevronRight className="h-3 w-3" />
                </Link>
                <h1 className="text-lg font-bold mt-1 leading-tight">{name}</h1>
                <span className="text-xs text-muted-foreground">{name_en}</span>
                <div className="mt-2">
                    {type === "ice" && (
                        <Badge variant="pastelBlue">
                            차가운 음료
                        </Badge>
                    )}
                    {type === "hot" && (
                        <Badge variant="pastelRed">
                            따뜻한 음료
                        </Badge>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Summary;
