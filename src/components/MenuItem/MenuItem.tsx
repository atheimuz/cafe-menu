"use client";

import Link from "next/link";
import { useState } from "react";
import { CgChevronUp } from "react-icons/cg";
import { convertBrandName } from "@/utils/brand";
import { convertTitleAndUnit } from "@/utils/report";
import { IMenuItem } from "@/models/menu";
import styles from "./MenuItem.module.scss";

const MenuItem = ({ _id, name, brand, thumbnail, report }: IMenuItem) => {
    const [moreStatus, setMoreStatus] = useState<boolean>(false);

    return (
        <div className={styles.wrapper}>
            <div className={styles.topArea}>
                <Link href={`/menu/${_id}`}>
                    <img src={thumbnail} className={styles.thumbnail} />
                </Link>
                <Link href={`/menu/${_id}`} className={styles.content}>
                    <span className={styles.brand}>
                        {convertBrandName(brand?.name)}
                    </span>
                    <p className={styles.title}>{name}</p>
                </Link>
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
