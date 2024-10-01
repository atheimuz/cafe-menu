import Skeleton from "react-loading-skeleton";
import ItemTitle from "@/components/ItemTitle";
import styles from "./Options.module.scss";

const OptionsSkeleton = () => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>옵션 제공</ItemTitle>

            <ul className={styles.options}>
                {[0, 1].map((number) => (
                    <li className={styles.option} key={number}>
                        <Skeleton
                            width={30}
                            height={30}
                            className={styles.icon}
                            circle
                        />
                        <dl>
                            <dt>
                                <Skeleton />
                            </dt>
                            <dd>
                                <Skeleton />
                            </dd>
                        </dl>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OptionsSkeleton;
