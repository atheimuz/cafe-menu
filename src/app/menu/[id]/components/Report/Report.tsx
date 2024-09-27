"use client";

import { useState } from "react";
import styles from "./Report.module.scss";
import data from "@/app/menu/[id]/menu.json";
import { convertTitleAndUnit } from "@/utils/report";

const Report = () => {
    const [index, setIndex] = useState<number>(0);

    return (
        <div className={styles.wrapper}>
            <ul className={styles.sizes}>
                {data.report.map((item, sizeIndex) => (
                    <li
                        key={item.size}
                        className={`${styles.size} ${
                            sizeIndex === index ? styles.active : ""
                        }`}
                        onClick={() => setIndex(sizeIndex)}
                    >
                        {item.size}
                    </li>
                ))}
            </ul>
            <ul>
                {Object.entries(data.report[index]).map(([key, value]) => {
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
    );
};

export default Report;
