import Link from "next/link";
import Image from "next/image";
import { CgChevronRight } from "react-icons/cg";
import styles from "./Summary.module.scss";

interface Props {
    name: string;
    name_en: string;
    thumbnail: string;
    brand: { _id: string; name: string };
}
const Summary = ({ name, name_en, thumbnail, brand }: Props) => {
    return (
        <div className={styles.wrapper}>
            <Image
                src={thumbnail}
                className={styles.cover}
                width={110}
                height={110}
                alt="제품 사진"
            />
            <div className={styles.text}>
                <Link className={styles.brand} href={`/brand/${brand?._id}`}>
                    {brand?.name}
                    <CgChevronRight />
                </Link>
                <h1 className={styles.title}>
                    {name}
                    <span>{name_en}</span>
                </h1>
            </div>
        </div>
    );
};

export default Summary;
