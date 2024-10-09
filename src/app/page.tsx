import { Suspense } from "react";
import Search from "@/app/components/Search";
import BrandList from "@/app/components/BrandList";
import BrandListSkeleton from "@/app/components/BrandList/BrandListSkeleton";
import styles from "./page.module.scss";

export default function HomePage() {
    return (
        <div className={styles.page}>
            <Search />
            <h1 className={styles.title}>
                다양한 프랜차이즈의 음료들의{" \n"}
                <span className={styles.point}>영양성분</span>을 확인해보세요!
            </h1>
            <Suspense fallback={<BrandListSkeleton />}>
                <BrandList />
            </Suspense>
        </div>
    );
}
