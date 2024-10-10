import { Suspense } from "react";
import Loading from "@/components/Loading";
import Header from "@/components/Header";
import BrandInfo from "@/app/brand/[id]/components/BrandInfo";
import BrandInfoSkeleton from "@/app/brand/[id]/components/BrandInfo/BrandInfoSkeleton";
import FilteredMenuList from "@/app/brand/[id]/components/FilteredMenuList";
import { convertBrandName } from "@/utils/brand";
import { getBrandAPI } from "@/lib/remote/brand";
import styles from "./page.module.scss";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const brand = await getBrandAPI(params.id);

    if ("error" in brand) {
        return {
            title: "브랜드 정보를 불러올 수 없습니다 | 카페 칼로리",
            description:
                "해당 브랜드의 정보를 불러오는 도중 오류가 발생했습니다."
        };
    }

    const brandName = convertBrandName(brand?.name);

    return {
        title: `${brandName} - 영양 성분 정보 | 카페 칼로리`,
        description: `${brandName}의 음료와 영양 성분 정보를 한눈에 확인하세요. 다양한 음료의 칼로리, 탄수화물, 지방, 단백질 등 상세한 정보를 제공합니다.`
    };
}

export default async function BrandPage({
    params
}: {
    params: { id: string };
}) {
    return (
        <>
            <Header />
            <Suspense fallback={<BrandInfoSkeleton />}>
                <BrandInfo id={params.id} />
            </Suspense>
            <div className={styles.content}>
                <Suspense fallback={<Loading />}>
                    <FilteredMenuList />
                </Suspense>
            </div>
        </>
    );
}
