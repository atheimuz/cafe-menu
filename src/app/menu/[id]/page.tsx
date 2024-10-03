import { Suspense } from "react";
import { getMenuAPI } from "@/lib/remote/menu";
import { convertBrandName } from "@/utils/brand";
import Header from "@/components/Header";
import MenuInfo, {
    MenuInfoSkeleton
} from "@/app/menu/[id]/components/MenuInfo";
import MenuInfo from "@/app/menu/[id]/components/MenuInfo";

export default function MenuDetailPage({ params }: { params: { id: string } }) {
    return (
        <>
            <Header />
            <Suspense fallback={<MenuInfoSkeleton />}>
                <MenuInfo id={params.id} />
            </Suspense>
        </>
    );
}
