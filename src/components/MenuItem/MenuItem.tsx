"use client";

import Link from "next/link";
import { useState } from "react";
import { CgChevronUp } from "react-icons/cg";
import { convertTitleAndUnit } from "@/utils/report";
import styles from "./MenuItem.module.scss";

interface Props {
    name: string;
    brand: string;
    thumbnail: string;
    report: { [key: string]: number };
}
const MenuItem = ({ name, brand, thumbnail, report }: Props) => {
    const [moreStatus, setMoreStatus] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.topArea}>
                <img src={thumbnail} className={styles.thumbnail} />
                <div className={styles.content}>
                    <span className={styles.brand}>{brand}</span>
                    <p className={styles.title}>{name}</p>
                </div>
                <button
                    className={`${styles.moreBtn} ${
                        moreStatus ? styles.active : ""
                    }`}
                    onClick={() => setMoreStatus(!moreStatus)}
                >
                    <CgChevronUp />
                </button>
            </div>
            {moreStatus && (
                <div className={styles.bottomArea}>
                    <ul className={styles.reportItems}>
                        {Object.entries(report).map(([key, value]) => {
                            const { title, unit } = convertTitleAndUnit(key);
                            if (!title) return null;
                            return (
                                <li className={styles.reportItem}>
                                    <dl className={styles.reportItemInner}>
                                        <dt>{title}</dt>
                                        <dd>
                                            {value}
                                            {unit}
                                        </dd>
                                    </dl>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MenuItem;
