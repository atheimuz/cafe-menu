import Search from "@/app/components/Search";
import SearchedList from "@/app/search/components/SearchedList";
import styles from "./page.module.scss";

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
            <SearchedList keyword={keyword} />
        </div>
    );
}
