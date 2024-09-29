import { ReactNode } from "react";
import styles from "./ItemTitle.module.scss";

interface Props {
    children: ReactNode;
}
const ItemTitle = ({ children }: Props) => {
    return <h3 className={styles.title}>{children}</h3>;
};

export default ItemTitle;
