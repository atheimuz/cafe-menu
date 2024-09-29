import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import data from "@/app/menu/[id]/menu.json";
import styles from "./Summary.module.scss";

const Summary = () => {
    return (
        <div className={styles.wrapper}>
            <img
                className={styles.cover}
                src={data.thumbnail}
                alt="제품 사진"
            />
            <div className={styles.text}>
                <Link className={styles.brand} href="/brand/123">
                    {data.brand}
                    <CgChevronRight />
                </Link>
                <h1 className={styles.title}>
                    {data.name}
                    <span>{data.name_en}</span>
                </h1>
            </div>
        </div>
    );
};

export default Summary;
