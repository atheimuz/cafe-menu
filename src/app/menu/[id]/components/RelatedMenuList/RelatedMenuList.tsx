import ItemTitle from "@/components/ItemTitle";
import RelatedMenuItem from "@/components/RelatedMenuItem";
import styles from "./RelatedMenuList.module.scss";

interface Props {
    items?: {
        type: "ice" | "hot" | "sizeUp" | "sizeDown" | "decaf" | "caf";
        menu: {
            _id: string;
            name: string;
            thumbnail: string;
        };
    }[];
}
const RelatedMenuList = ({ items }: Props) => {
    if (!items?.length) return null;
    return (
        <div className={styles.wrapper}>
            <ItemTitle>연관 상품</ItemTitle>
            <ul className={styles.items}>
                {items.map((item) => (
                    <li key={item.menu}>
                        <RelatedMenuItem {...item} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RelatedMenuList;
