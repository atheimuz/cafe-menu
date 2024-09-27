import styles from "./Price.module.scss";
import data from "@/app/menu/[id]/menu.json";
import { numberWithCommas } from "@/utils/common";

const Price = () => {
    return (
        <div className={styles.wrapper}>
            <ul>
                {data.prices.map((item) => (
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
