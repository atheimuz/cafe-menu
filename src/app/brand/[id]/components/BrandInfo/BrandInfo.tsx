import { getBrandAPI } from "@/lib/remote/brand";
import Options from "@/app/brand/[id]/components/Options";
import BrandName from "@/app/brand/[id]/components/BrandName";

const BrandInfo = async ({ id }: { id: string }) => {
    const data = await getBrandAPI(id);

    if ("error" in data) {
        return null;
    }

    return (
        <>
            <BrandName name={data?.name} link={data?.link} />
            <Options options={data?.options} />
        </>
    );
};

export default BrandInfo;
