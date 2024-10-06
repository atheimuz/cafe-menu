import ItemTitle from "@/components/ItemTitle";
import { convertOption } from "@/utils/brand";
import styles from "./Options.module.scss";

const icons = {
    caffeine: "/images/icons/coffee.png",
    milk: "/images/icons/milk.png",
    sugar: "/images/icons/sugar.png"
};

interface Props {
    options: { type: string; options: string[] }[];
}
const Options = ({ options }: Props) => {
    return (
        <div className={styles.wrapper}>
            <ItemTitle>옵션 제공</ItemTitle>
            <div className={styles.scrollArea}>
                <ul className={styles.options}>
                    {options?.map((item) => (
                        <li className={styles.option} key={item.type}>
                            <img
                                className={styles.icon}
                                src={icons[item.type]}
                                alt={convertOption(item.type)}
                            />
                            <p className={styles.type}>
                                {convertOption(item.type)}
                            </p>
                            <ul>
                                {item.options.map((option) => (
                                    <li key={option}>
                                        {convertOption(option)}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Options;
