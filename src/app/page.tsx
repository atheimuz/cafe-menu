export const revalidate = 3600;

import { Suspense } from "react";
import Search from "@/app/components/Search";
import BrandList from "@/app/components/BrandList";
import BrandListSkeleton from "@/app/components/BrandList/BrandListSkeleton";

export default function HomePage() {
    return (
        <div className="pb-8">
            <div className="px-4 pt-12 pb-4">
                <h1 className="text-xl font-bold leading-snug tracking-tight">
                    다양한 프랜차이즈의 음료들의{" "}
                    <span className="text-[#FF6F00]">영양성분</span>을
                    <br />
                    확인해보세요!
                </h1>
            </div>
            <Search />
            <Suspense fallback={<BrandListSkeleton />}>
                <BrandList />
            </Suspense>
        </div>
    );
}
