import { LuFileSearch } from "react-icons/lu";
import styles from "./Empty.module.scss";

const Empty = () => {
    return (
        <div className={styles.wrapper}>
            <LuFileSearch className={styles.icon} />
            <p className={styles.text}>검색 결과가 없어요</p>
        </div>
    );
};

export default Empty;
