import { DetailSkeleton } from "@/app/menu/[id]/components/Detail";
import { SummarySkeleton } from "@/app/menu/[id]/components/Summary";
import { PriceSkeleton } from "@/app/menu/[id]/components/Price";
import styles from "./MenuInfo.module.scss";

const MenuInfoSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <SummarySkeleton />
            <DetailSkeleton />
            <PriceSkeleton />
        </div>
    );
};

export default MenuInfoSkeleton;
