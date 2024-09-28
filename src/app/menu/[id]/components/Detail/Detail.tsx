"use client";

import { Tag } from "@atheimuz/react-ui";
import styles from "./Detail.module.scss";
import data from "@/app/menu/[id]/menu.json";

const Detail = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.tags}>
                <li>
                    <Tag>차가운 음료만 가능</Tag>
                </li>
                <li>
                    <Tag>시즌 메뉴</Tag>
                </li>
            </ul>
            <h2 className={styles.desc}>{data.desc}</h2>
            <div className={styles.allergy}>
                알레르기 유발: {data.allergies.join(", ")}
            </div>
        </div>
    );
};

export default Detail;
