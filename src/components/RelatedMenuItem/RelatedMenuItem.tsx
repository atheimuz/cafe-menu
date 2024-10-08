"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { convertRelatedType, convertRelatedTypeTagColor } from "@/utils/menu";
import styles from "./RelatedMenuItem.module.scss";

const Tag = dynamic(() => import("@atheimuz/react-ui").then((mod) => mod.Tag), {
    ssr: false
});

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
                <span className={styles.type}>
                    <Tag size="small" color={convertRelatedTypeTagColor(type)}>
                        {convertRelatedType(type)}
                    </Tag>
                </span>
                <p className={styles.name}>{menu?.name}</p>
            </div>
        </Link>
    );
};

export default RelatedMenuItem;
