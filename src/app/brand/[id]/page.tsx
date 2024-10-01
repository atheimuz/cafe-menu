import { Suspense } from "react";
import Header from "@/components/Header";
import BrandInfo, {
    BrandInfoSkeleton
} from "@/app/brand/[id]/components/BrandInfo";
import FilteredMenuList from "@/app/brand/[id]/components/FilteredMenuList";
import styles from "./page.module.scss";

export default function BrandPage() {
    return (
        <>
            <Header />
            <Suspense fallback={<BrandInfoSkeleton />}>
                <BrandInfo />
            </Suspense>
            <div className={styles.content}>
                <FilteredMenuList />
            </div>
        </>
    );
}
