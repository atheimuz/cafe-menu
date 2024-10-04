"use client";

import Link from "next/link";
import Image from "next/image";
import { Tag } from "@atheimuz/react-ui";
import { convertBrandName } from "@/utils/brand";
import { CgChevronRight } from "react-icons/cg";
import styles from "./Summary.module.scss";

interface Props {
    type: "ice" | "hot";
    name: string;
    name_en: string;
    thumbnail: string;
    brand: { _id: string; name: string };
}
const Summary = ({ type, name, name_en, thumbnail, brand }: Props) => {
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
                    {convertBrandName(brand?.name)}
                    <CgChevronRight />
                </Link>
                <h1 className={styles.title}>
                    {name}
                    <span>{name_en}</span>
                </h1>
                <div className={styles.tag}>
                    {type === "ice" && <Tag color="blue">차가운 음료</Tag>}
                    {type === "hot" && <Tag color="red">따뜻한 음료</Tag>}
                </div>
            </div>
        </div>
    );
};

export default Summary;
