"use client";

import { useState } from "react";
import { Tab } from "@atheimuz/react-ui";
import { convertTitleAndUnit } from "@/utils/menu";
import { convertBrandName } from "@/utils/brand";
import styles from "./Report.module.scss";

interface Props {
    brandName: string;
    report: { [key: string]: number | string }[];
}
const Report = ({ brandName, report }: Props) => {
    const [index, setIndex] = useState<number>(0);

    if (!report?.length) return null;
    return (
        <div className={styles.wrapper}>
            <Tab
                value={index}
                onChange={(val) => setIndex(val)}
                className={styles.sizes}
            >
                {report.map((item, sizeIndex) => (
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
                {Object.entries(report[index]).map(([key, value]) => {
                    const { title, unit } = convertTitleAndUnit(key);
                    if (!title) return null;
                    return (
                        <li className={styles.reportItem} key={key}>
                            <dl className={styles.reportItemInner}>
                                <dt>{title}</dt>
                                <dd>
                                    {value}
                                    {key === "capacity"
                                        ? report[index].unit
                                        : unit}
                                </dd>
                            </dl>
                        </li>
                    );
                })}
            </ul>
            <p className={styles.caution}>
                * 출처: {convertBrandName(brandName)} 공식 홈페이지(앱)
            </p>
        </div>
    );
};

export default Report;
