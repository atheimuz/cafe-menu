import { ExternalLink } from "lucide-react";
import { convertBrandName } from "@/utils/brand";
import { brandLogoSrc } from "@/schema/brand";

interface Props {
    name: string;
    link: string;
}
const BrandName = ({ name, link }: Props) => {
    return (
        <div className="flex items-center gap-3 px-4 py-5">
            <img
                src={brandLogoSrc[name]}
                alt={`${convertBrandName(name)} 로고`}
                className="h-10 w-10 rounded-full object-contain"
            />
            <div className="flex-1">
                <h1 className="text-lg font-bold">{convertBrandName(name)}</h1>
            </div>
            <a
                className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                공식 홈페이지
                <ExternalLink className="h-3 w-3" />
            </a>
        </div>
    );
};

export default BrandName;
