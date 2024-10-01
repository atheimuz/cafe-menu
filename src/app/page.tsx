import { Suspense } from "react";
import Search from "@/app/components/Search";
import BrandList, { BrandListSkeleton } from "@/app/components/BrandList";
import FilteredMenuList from "@/app/components/FilteredMenuList";
import styles from "./page.module.scss";

export default function HomePage() {
    return (
        <div className={styles.page}>
            <Search />
            <Suspense fallback={<BrandListSkeleton />}>
                <BrandList />
            </Suspense>
            <FilteredMenuList />
        </div>
    );
}
