"use client";

import { useParams } from "next/navigation";
import Detail from "@/app/menu/[id]/components/Detail";
import Header from "@/components/Header";
import MenuInfo from "@/app/menu/[id]/components/MenuInfo";

export default function MenuDetailPage({ params }: { params: { id: string } }) {
    return (
        <>
            <Header />
            <MenuInfo id={params.id} />
        </>
    );
}
