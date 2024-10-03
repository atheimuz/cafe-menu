import Skeleton from "react-loading-skeleton";
import styles from "./Summary.module.scss";

const SummarySkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <Skeleton width={110} height={110} className={styles.cover} />
            <div className={styles.text}>
                <Skeleton className={styles.brand} />
                <div className={styles.title}>
                    <Skeleton />
                    <span>
                        <Skeleton />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SummarySkeleton;
