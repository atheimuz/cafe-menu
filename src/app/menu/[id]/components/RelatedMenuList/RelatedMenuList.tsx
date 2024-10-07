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
    if (!items || !items.length) return null;
    return (
        <div className={styles.wrapper}>
            <ItemTitle>연관 상품</ItemTitle>
            <div className={styles.scrollArea}>
                <ul className={styles.items}>
                    {items.map((item) => (
                        <li key={item.menu._id}>
                            <RelatedMenuItem {...item} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default RelatedMenuList;
