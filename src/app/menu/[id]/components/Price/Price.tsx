import styles from "./Price.module.scss";
import { numberWithCommas } from "@/utils/common";

interface Props {
    prices: { size: string; price: number }[];
}

const Price = ({ prices }: Props) => {
    return (
        <div className={styles.wrapper}>
            <ul>
                {prices?.map((item) => (
                    <li key={item.size} className={styles.item}>
                        <p className={styles.size}>{item.size}</p>
                        <span className={styles.price}>
                            {numberWithCommas(item.price)}원
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Price;
