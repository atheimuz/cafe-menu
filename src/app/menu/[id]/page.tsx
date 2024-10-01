"use client";

import { useParams } from "next/navigation";
import Detail from "@/app/menu/[id]/components/Detail";
import Header from "@/components/Header";
import Summary from "@/app/menu/[id]/components/Summary";
import Report from "@/app/menu/[id]/components/Report";
import Price from "@/app/menu/[id]/components/Price";
import { useMenu } from "@/queries/useMenuQuery";
import styles from "./page.module.scss";

export default function MenuDetailPage() {
    const params = useParams();
    const id = typeof params.id === "string" ? params.id : "";
    const { data, isFetching } = useMenu(id);

    if (isFetching) {
        // todo: skeleton
        return null;
    }

    if (!data) {
        // todo: error component
        return null;
    }

    return (
        <>
            <Header />
            <div className={styles.content}>
                <Summary
                    name={data?.name}
                    name_en={data?.name_en}
                    thumbnail={data?.thumbnail}
                    brand={data?.brand}
                />
                <Detail
                    type={data?.type}
                    desc={data?.desc}
                    allergies={data?.allergies}
                />
                <Price prices={data?.prices} />
                <Report report={data?.report} />
            </div>
        </>
    );
}
