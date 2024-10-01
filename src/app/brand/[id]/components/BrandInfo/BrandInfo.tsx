"use client";

import { useParams } from "next/navigation";
import Options from "@/app/brand/[id]/components/Options";
import { useBrand } from "@/queries/useBrandQuery";
import BrandName from "@/app/brand/[id]/components/BrandName";

const BrandInfo = () => {
    const params = useParams();
    const id = typeof params.id === "string" ? params.id : "";
    const { data } = useBrand(id);

    return (
        <>
            <BrandName name={data?.name} />
            <Options options={data?.options} />
        </>
    );
};

export default BrandInfo;
