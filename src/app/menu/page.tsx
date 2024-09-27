import MenuItem from "@/components/MenuItem";
import data from "./menuList.json";
import styles from "./page.module.scss";

export default function Menu() {
    return (
        <div className={styles.content}>
            <ul className={styles.items}>
                {data.items.map((item) => (
                    <li className={styles.item} key={item.name}>
                        <MenuItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
