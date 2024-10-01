import { convertBrandName } from "@/utils/brand";
import styles from "./BrandName.module.scss";

interface Props {
    name: string;
}
const BrandName = ({ name }: Props) => {
    return (
        <div className={styles.wrapper}>
            <img
                src={`/images/brand/${name}.svg`}
                alt={`${convertBrandName(name)} 로고`}
                className={styles.icon}
            />
            <h1 className={styles.brand}>{convertBrandName(name)}</h1>
        </div>
    );
};

export default BrandName;
