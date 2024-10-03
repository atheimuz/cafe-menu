import Link from "next/link";
import { convertRelatedType } from "@/utils/menu";
import styles from "./RelatedMenuItem.module.scss";

interface Props {
    type: "ice" | "hot" | "sizeUp" | "sizeDown" | "decaf" | "caf";
    menu: {
        _id: string;
        name: string;
        thumbnail: string;
    };
}
const RelatedMenuItem = ({ type, menu }: Props) => {
    return (
        <Link href={`/menu/${menu?._id}`} className={styles.wrapper}>
            <img src={menu?.thumbnail} className={styles.thumbnail} />
            <div className={styles.textBox}>
                <span className={styles.type}>{convertRelatedType(type)}</span>
                <p className={styles.name}>{menu?.name}</p>
            </div>
        </Link>
    );
};

export default RelatedMenuItem;
