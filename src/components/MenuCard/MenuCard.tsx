import Link from "next/link";
import styles from "./MenuCard.module.scss";

interface Props {}
const MenuCard = ({}: Props) => {
    return (
        <Link href="/menu/123" className={styles.wrapper}>
            <img
                src="https://image.istarbucks.co.kr/upload/store/skuimg/2024/06/[9200000005369]_20240614143554575.jpg"
                className={styles.thumbnail}
            />
            <div className={styles.textBox}>
                <span className={styles.brand}>스타벅스</span>
                <p className={styles.name}>딸기 글레이즈드 크림 프라푸치노</p>
            </div>
        </Link>
    );
};

export default MenuCard;
