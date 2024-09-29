import ItemTitle from "@/components/ItemTitle";
import MenuCard from "@/components/MenuCard";
import styles from "./BestMenuList.module.scss";

const BestMenuList = () => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>인기 메뉴</ItemTitle>
            <div className={styles.scrollArea}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <MenuCard />
                    </li>
                    <li className={styles.item}>
                        <MenuCard />
                    </li>
                    <li className={styles.item}>
                        <MenuCard />
                    </li>
                    <li className={styles.item}>
                        <MenuCard />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BestMenuList;
