import Link from "next/link";
import styles from "./BrandList.module.scss";

const data = [
    {
        brand: "스타벅스",
        logo: "/images/brand/starbucks.svg"
    },
    {
        brand: "투썸플레이스",
        logo: "/images/brand/twosomeplace.png"
    },
    {
        brand: "할리스",
        logo: "/images/brand/hollys.jpg"
    },
    {
        brand: "이디야",
        logo: "/images/brand/ediya.jpg"
    },
    {
        brand: "메가커피",
        logo: "/images/brand/megacoffee.png"
    },
    {
        brand: "컴포즈커피",
        logo: "/images/brand/composecoffee.svg"
    },
    {
        brand: "매머드커피",
        logo: "/images/brand/mammothcoffee.png"
    },
    {
        brand: "빽다방",
        logo: "/images/brand/paikscoffee.png"
    }
    // {
    //     brand: "더벤티",
    //     logo: "/images/brand/theventi.png"
    // }
    // {
    //     brand: "파스쿠찌",
    //     logo: "/images/brand/pascucci.svg"
    // }
];
const BrandList = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {data.map((item) => (
                    <li key={item.brand} className={styles.item}>
                        <Link href="/brand/123" className={styles.brand}>
                            <img
                                src={item.logo}
                                alt={item.brand}
                                className={styles.brandLogo}
                            />
                            <p className={styles.brandName}>{item.brand}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BrandList;
