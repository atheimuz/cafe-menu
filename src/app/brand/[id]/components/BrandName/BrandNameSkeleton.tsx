import Skeleton from "react-loading-skeleton";
import styles from "./BrandName.module.scss";

const BrandNameSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <Skeleton width={40} height={40} circle />
            </div>
            <div className={styles.brand}>
                <Skeleton width="50%" />
            </div>
        </div>
    );
};

export default BrandNameSkeleton;
