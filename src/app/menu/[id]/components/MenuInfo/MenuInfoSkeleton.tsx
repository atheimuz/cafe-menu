import { SummarySkeleton } from "@/app/menu/[id]/components/Summary";
import { RelatedMenuListSkeleton } from "@/app/menu/[id]/components/RelatedMenuList";
import { DetailSkeleton } from "@/app/menu/[id]/components/Detail";
import { PriceSkeleton } from "@/app/menu/[id]/components/Price";
import styles from "./MenuInfo.module.scss";

const MenuInfoSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <SummarySkeleton />
            <RelatedMenuListSkeleton />
            <DetailSkeleton />
            <PriceSkeleton />
        </div>
    );
};

export default MenuInfoSkeleton;
