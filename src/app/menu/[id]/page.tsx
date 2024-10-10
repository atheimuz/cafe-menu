import { getMenuAPI } from "@/lib/remote/menu";
import { convertBrandName } from "@/utils/brand";
import Header from "@/components/Header";
import MenuInfo from "@/app/menu/[id]/components/MenuInfo";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const menu = await getMenuAPI(params.id);

    if ("error" in menu) {
        return {
            title: "메뉴 정보를 불러올 수 없습니다 | 카페 칼로리",
            description: "해당 메뉴의 정보를 불러오는 도중 오류가 발생했습니다."
        };
    }

    const brandName = convertBrandName(menu?.brand?.name);

    return {
        title: `[${brandName}] ${menu.name} - 영양 성분 정보 | 카페 칼로리`,
        description: `${menu.name}의 칼로리, 탄수화물, 지방, 단백질 등 영양 성분 정보를 확인하세요. ${brandName}의 다양한 음료에 대한 영양 정보를 한눈에 볼 수 있습니다.`
    };
}

export default async function MenuDetailPage({
    params
}: {
    params: { id: string };
}) {
    return (
        <>
            <Header />
            <MenuInfo id={params.id} />
        </>
    );
}
