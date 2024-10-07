"use client";

import { Message, Tag } from "@atheimuz/react-ui";
import { convertAllergy, convertCaution } from "@/utils/menu";
import ItemTitle from "@/components/ItemTitle";
import styles from "./Detail.module.scss";

interface Props {
    desc: string;
    cautions?: string[];
    allergies?: string[];
    children?: React.ReactElement;
}
const Detail = ({ desc, cautions, allergies, children }: Props) => {
    return (
        <div className={styles.wrapper}>
            <h2 className={styles.desc}>{desc}</h2>
            {cautions && cautions.length > 0 && (
                <div className={styles.messages}>
                    {cautions.map((item) => (
                        <Message color="red" key={item}>
                            {convertCaution(item)}
                        </Message>
                    ))}
                </div>
            )}
            {children}
            <div className={styles.allergies}>
                <ItemTitle>알레르기 유발</ItemTitle>
                {allergies && allergies.length > 0 ? (
                    <ul className={styles.items}>
                        {allergies.map((item: string) => (
                            <li key={item}>
                                <Tag>{convertAllergy(item)}</Tag>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.empty}>없음</p>
                )}
            </div>
        </div>
    );
};

export default Detail;
