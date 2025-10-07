import { IBrand } from "@/models/brand";

export const getBrandsAPI = async () => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/api/brands`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error(`브랜드 목록 요청 실패: ${res.status}`);
    }

    const resJson = await res.json();
    const data: { list: IBrand[] } = resJson.data;

    return data;
};

export const getBrandAPI = async (brandId: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URI}/api/brand/${brandId}`,
        { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
        throw new Error(`브랜드 정보 요청 실패: ${res.status}`);
    }

    const resJson = await res.json();
    const data: IBrand = resJson.data;

    return data;
};
