"use client";

import { useState } from "react";
import { Tab } from "@atheimuz/react-ui";
import data from "@/app/menu/[id]/menu.json";
import { convertTitleAndUnit } from "@/utils/report";
import styles from "./Report.module.scss";

const Report = () => {
    const [index, setIndex] = useState<number>(0);

    return (
        <div className={styles.wrapper}>
            <Tab
                value={index}
                onChange={(val) => setIndex(val)}
                className={styles.sizes}
            >
                {data.report.map((item, sizeIndex) => (
                    <Tab.Item
                        key={item.size}
                        value={sizeIndex}
                        onClick={() => setIndex(sizeIndex)}
                    >
                        {item.size}
                    </Tab.Item>
                ))}
            </Tab>
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
