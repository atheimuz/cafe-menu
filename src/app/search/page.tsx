import { Suspense } from "react";
import Loading from "@/components/Loading";
import Search from "@/app/components/Search";
import SearchedList from "@/app/search/components/SearchedList";
import styles from "./page.module.scss";

export async function generateMetadata({
    searchParams
}: {
    searchParams: {
        keyword?: string;
    };
}) {
    const keyword = searchParams.keyword;

    return {
        title: `${keyword} 검색 결과 | 카페 칼로리`,
        description: `${keyword}에 대한 검색 결과를 확인하세요. 원하는 음료 정보를 빠르게 찾고, 상세한 영양 성분을 알아보세요.`
    };
}

export default function SearchPage({
    searchParams
}: {
    searchParams: {
        keyword?: string;
    };
}) {
    const keyword = searchParams.keyword;
    return (
        <div className={styles.page}>
            <Search keyword={keyword} />
            <Suspense fallback={<Loading />}>
                <SearchedList keyword={keyword} />
            </Suspense>
        </div>
    );
}
