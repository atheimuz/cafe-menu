import ItemTitle from "@/components/ItemTitle";
import MenuItem from "@/components/MenuItem";
import data from "@/app/menu/menuList.json";
import styles from "./SearchedList.module.scss";

const SearchedList = () => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>검색 결과</ItemTitle>
            <ul className={styles.items}>
                {data.items.map((item) => (
                    <li className={styles.item} key={item.name}>
                        <MenuItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchedList;
