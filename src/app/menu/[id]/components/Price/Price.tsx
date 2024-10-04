import { numberWithCommas } from "@/utils/common";
import ItemTitle from "@/components/ItemTitle";
import styles from "./Price.module.scss";

interface Props {
    prices: { size: string; price: number }[];
}

const Price = ({ prices }: Props) => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>가격</ItemTitle>
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
