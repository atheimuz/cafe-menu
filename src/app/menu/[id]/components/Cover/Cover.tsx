import data from "@/app/menu/[id]/menu.json";
import styles from "./Cover.module.scss";

const Cover = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.cover} src={data.thumbnail} alt="앨범커버" />
        </div>
    );
};

export default Cover;
