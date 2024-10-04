import Skeleton from "react-loading-skeleton";
import styles from "./RelatedMenuItem.module.scss";

const RelatedMenuItemSkeleton = () => {
    return <Skeleton className={`${styles.wrapper} ${styles.skeleton}`} />;
};

export default RelatedMenuItemSkeleton;
