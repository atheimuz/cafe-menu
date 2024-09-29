import Search from "@/app/components/Search";
import SearchedList from "@/app/search/components/SearchedList";
import Empty from "@/app/search/components/Empty";
import styles from "./page.module.scss";

export default function SearchPage() {
    return (
        <div className={styles.page}>
            <Search />
            {/* <Empty /> */}
            <SearchedList />
        </div>
    );
}
