"use client";

import Options from "@/app/brand/[id]/components/Options";
import { useBrand } from "@/queries/useBrandQuery";
import BrandName from "@/app/brand/[id]/components/BrandName";

const BrandInfo = ({ id }: { id: string }) => {
    const { data } = useBrand(id);

    return (
        <>
            <BrandName name={data?.name} />
            <Options options={data?.options} />
        </>
    );
};

export default BrandInfo;
