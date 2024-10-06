"use client";

import Link from "next/link";
import { convertBrandName } from "@/utils/brand";
import { brandLogoSrc } from "@/schema/brand";
import { useBrands } from "@/queries/useBrandQuery";
import styles from "./BrandList.module.scss";

const BrandList = () => {
    const { data } = useBrands();

    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {data?.list?.map((item) => (
                    <li key={item._id} className={styles.item}>
                        <Link
                            href={`/brand/${item._id}`}
                            className={styles.brand}
                        >
                            <img
                                src={brandLogoSrc[item.name]}
                                alt={`${item.name} 로고`}
                                className={styles.brandLogo}
                            />
                            <p className={styles.brandName}>
                                {convertBrandName(item.name)}
                            </p>
                        </Link>
                    </li>
                ))}
            </ul>
            <p className={styles.caution}>
                * 더 다양한 브랜드들이 추가될 예정이에요
            </p>
        </div>
    );
};

export default BrandList;
