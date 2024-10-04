import ItemTitle from "@/components/ItemTitle";
import { RelatedMenuItemSkeleton } from "@/components/RelatedMenuItem";
import styles from "./RelatedMenuList.module.scss";

const RelatedMenuListSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>연관 상품</ItemTitle>
            <ul className={styles.items}>
                {[0, 1].map((item) => (
                    <li key={item}>
                        <RelatedMenuItemSkeleton />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedMenuListSkeleton;
