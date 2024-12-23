import Skeleton from "react-loading-skeleton";
import styles from "./BrandList.module.scss";

const BrandListSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {new Array(8).fill(0).map((_, index) => (
                    <li key={index} className={styles.item}>
                        <Skeleton className={styles.brand} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandListSkeleton;
