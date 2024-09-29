import Header from "@/components/Header";
import BrandInfo from "@/app/brand/[id]/components/BrandInfo";
import Options from "@/app/brand/[id]/components/Options";
import BestMenuList from "@/app/brand/[id]/components/BestMenuList";
import FilteredMenuList from "@/app/brand/[id]/components/FilteredMenuList";
import styles from "./page.module.scss";

export default function BrandPage() {
    return (
        <>
            <Header />
            <BrandInfo />
            <Options />
            <div className={styles.content}>
                <BestMenuList />
                <FilteredMenuList />
            </div>
        </>
    );
}
