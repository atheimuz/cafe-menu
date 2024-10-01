import Skeleton from "react-loading-skeleton";
import styles from "./BrandList.module.scss";

const BrandListSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {[0, 1, 2, 3].map((item) => (
                    <li key={item} className={styles.item}>
                        <div className={styles.brand}>
                            <div className={styles.brandLogo}>
                                <Skeleton width={28} height={28} circle />
                            </div>

                            <p className={styles.brandName}>
                                <Skeleton />
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandListSkeleton;
