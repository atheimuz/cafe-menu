import data from "@/app/menu/[id]/menu.json";
import styles from "./Summary.module.scss";

const Summary = () => {
    return (
        <div className={styles.wrapper}>
            <img className={styles.cover} src={data.thumbnail} alt="앨범커버" />
            <div className={styles.text}>
                <p className={styles.brand}>{data.brand}</p>
                <h1 className={styles.title}>
                    {data.name}
                    <span>{data.name_en}</span>
                </h1>
            </div>
        </div>
    );
};

export default Summary;
