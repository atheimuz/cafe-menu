import styles from "./BrandInfo.module.scss";

const BrandInfo = () => {
    return (
        <div className={styles.wrapper}>
            <img
                src="/images/brand/starbucks.svg"
                alt="스타벅스 로고"
                className={styles.icon}
            />
            <h1 className={styles.brand}>스타벅스</h1>
        </div>
    );
};

export default BrandInfo;
