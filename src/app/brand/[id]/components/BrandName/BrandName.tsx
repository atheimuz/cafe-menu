import { convertBrandName } from "@/utils/brand";
import { brandLogoSrc } from "@/schema/brand";
import styles from "./BrandName.module.scss";

interface Props {
    name: string;
    link: string;
}
const BrandName = ({ name, link }: Props) => {
    return (
        <div className={styles.wrapper}>
            <img
                src={brandLogoSrc[name]}
                alt={`${convertBrandName(name)} 로고`}
                className={styles.icon}
            />
            <h1 className={styles.brand}>{convertBrandName(name)}</h1>
            <a className={styles.link} href={link} target="_blank">
                공식 홈페이지
            </a>
        </div>
    );
};

export default BrandName;
