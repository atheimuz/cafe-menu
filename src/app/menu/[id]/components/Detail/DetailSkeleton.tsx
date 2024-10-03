import Skeleton from "react-loading-skeleton";
import styles from "./Detail.module.scss";

const DetailSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.desc}>
                <Skeleton count={3} />
            </h2>
        </div>
    );
};

export default DetailSkeleton;
