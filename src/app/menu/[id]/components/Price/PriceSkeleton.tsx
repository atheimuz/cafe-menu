import Skeleton from "react-loading-skeleton";
import styles from "./Price.module.scss";

const PriceSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.skeleton}>
                <Skeleton count={2} />
            </div>
        </div>
    );
};

export default PriceSkeleton;
