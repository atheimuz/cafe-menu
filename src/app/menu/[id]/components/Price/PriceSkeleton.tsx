import Skeleton from "react-loading-skeleton";
import ItemTitle from "@/components/ItemTitle";
import styles from "./Price.module.scss";

const PriceSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>가격</ItemTitle>
            <div className={styles.skeleton}>
                <Skeleton count={2} />
            </div>
        </div>
    );
};

export default PriceSkeleton;
