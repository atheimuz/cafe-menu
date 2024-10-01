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
            <ul className={styles.options}>
                {options?.map((item) => (
                    <li className={styles.option}>
                        <img
                            className={styles.icon}
                            src={icons[item.type]}
                            alt={convertOption(item.type)}
                        />
                        <dl>
                            <dt>{convertOption(item.type)}</dt>
                            {item.options.map((option) => (
                                <dd key={option}>{convertOption(option)}</dd>
                            ))}
                        </dl>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Options;
