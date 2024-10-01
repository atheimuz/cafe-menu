"use client";

import { Tag, Message } from "@atheimuz/react-ui";
import styles from "./Detail.module.scss";

interface Props {
    type: "ice" | "hot";
    desc: string;
    allergies: string[];
}
const Detail = ({ type, desc, allergies }: Props) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.tags}>
                <li>
                    {type === "ice" && <Tag color="blue">차가운 음료</Tag>}
                    {type === "hot" && <Tag color="red">따뜻한 음료</Tag>}
                </li>
            </ul>
            <h2 className={styles.desc}>{desc}</h2>
            {allergies?.length > 0 && (
                <Message color="gray" className={styles.allergy}>
                    알레르기 유발: {allergies.join(", ")}
                </Message>
            )}
        </div>
    );
};

export default Detail;
