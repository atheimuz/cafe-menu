import Skeleton from "react-loading-skeleton";
import PriceSkeleton from "@/app/menu/[id]/components/Price/PriceSkeleton";
import styles from "./Detail.module.scss";

const DetailSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.desc}>
                <Skeleton count={3} />
            </h2>
            <PriceSkeleton />
        </div>
    );
};

export default DetailSkeleton;
