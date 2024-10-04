"use client";

import { Message, Tag } from "@atheimuz/react-ui";
import { convertAllergy, convertCaution } from "@/utils/menu";
import ItemTitle from "@/components/ItemTitle";
import styles from "./Detail.module.scss";

interface Props {
    desc: string;
    cautions?: string[];
}
const Detail = ({ desc, cautions, allergies, children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.tags}>
                <li>
                    {type === "ice" && <Tag color="blue">차가운 음료</Tag>}
                    {type === "hot" && <Tag color="red">따뜻한 음료</Tag>}
                </li>
            </ul>
            <h2 className={styles.desc}>{desc}</h2>
            {cautions?.length > 0 && (
                <div className={styles.messages}>
                    {cautions.map((item) => (
                        <Message color="red" key={item}>
                            {convertCaution(item)}
                </Message>
                    ))}
                </div>
            )}
            )}
        </div>
    );
};

export default Detail;
