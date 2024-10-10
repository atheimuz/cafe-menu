import { getBrandAPI } from "@/lib/remote/brand";
import ErrorMessage from "@/components/ErrorMessage";
import Options from "@/app/brand/[id]/components/Options";
import BrandName from "@/app/brand/[id]/components/BrandName";

const BrandInfo = async ({ id }: { id: string }) => {
    const data = await getBrandAPI(id);

    if ("error" in data) {
        return <ErrorMessage>브랜드 정보를 불러오지 못했어요</ErrorMessage>;
    }

    return (
        <>
            <BrandName name={data?.name} link={data?.link} />
            <Options options={data?.options} />
        </>
    );
};

export default BrandInfo;
