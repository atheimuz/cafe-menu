import Link from "next/link";
import { convertBrandName } from "@/utils/brand";
import { brandLogoSrc, brandColor } from "@/schema/brand";
import { getBrandsAPI } from "@/lib/remote/brand";
import ErrorMessage from "@/components/ErrorMessage";
import styles from "./BrandList.module.scss";

const BrandList = async () => {
    const data = await getBrandsAPI();

    if ("error" in data) {
        return <ErrorMessage>브랜드 리스트를 불러오지 못했어요</ErrorMessage>;
    }

    return (
        <div className={styles.wrapper}>
            <ul className={styles.items}>
                {data?.list?.map((item) => (
                    <li key={item._id} className={styles.item}>
                        <Link
                            href={`/brand/${item._id}`}
                            className={styles.brand}
                            prefetch
                            style={{
                                backgroundColor: brandColor[item.name].background,
                                color: brandColor[item.name].text
                            }}
                        >
                            <p className={styles.brandName}>{convertBrandName(item.name)}</p>
                            <img
                                src={brandLogoSrc[item.name]}
                                alt={`${item.name} 로고`}
                                className={styles.brandLogo}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
            <p className={styles.caution}>* 더 다양한 브랜드들이 추가될 예정이에요</p>
        </div>
    );
};

export default BrandList;
