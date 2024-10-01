import { ImFileEmpty } from "react-icons/im";
import styles from "./MenuItemEmpty.module.scss";

const MenuItemEmpty = () => {
    return (
        <div className={styles.wrapper}>
            <ImFileEmpty className={styles.icon} />
            <p className={styles.text}>메뉴가 없어요</p>
        </div>
    );
};

export default MenuItemEmpty;
