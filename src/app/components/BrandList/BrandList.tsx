import Link from "next/link";
import { convertBrandName } from "@/utils/brand";
import { brandLogoSrc, brandColor } from "@/schema/brand";
import { getBrandsAPI } from "@/lib/remote/brand";
import ErrorMessage from "@/components/ErrorMessage";

const BrandList = async () => {
    const data = await getBrandsAPI();

    if ("error" in data) {
        return <ErrorMessage>브랜드 리스트를 불러오지 못했어요</ErrorMessage>;
    }

    return (
        <div className="px-4 mt-4">
            <ul className="grid grid-cols-2 gap-3">
                {data?.list?.map((item) => (
                    <li key={item._id}>
                        <Link
                            href={`/brand/${item._id}`}
                            prefetch
                            className="flex items-center justify-between rounded-2xl px-4 py-5 shadow-soft-sm transition-all duration-150 hover:opacity-90 active:scale-[0.97]"
                            style={{
                                backgroundColor: brandColor[item.name].background,
                                color: brandColor[item.name].text
                            }}
                        >
                            <p className="text-sm font-semibold leading-tight">
                                {convertBrandName(item.name)}
                            </p>
                            <img
                                src={brandLogoSrc[item.name]}
                                alt={`${item.name} 로고`}
                                className="h-10 w-10 rounded-full object-contain bg-white/20"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
            <p className="text-xs text-muted-foreground text-center mt-4">
                * 더 다양한 브랜드들이 추가될 예정이에요
            </p>
        </div>
    );
};

export default BrandList;
