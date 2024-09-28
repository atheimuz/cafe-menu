import Detail from "@/app/menu/[id]/components/Detail";
import Header from "@/components/Header";
import Summary from "@/app/menu/[id]/components/Summary";
import Report from "@/app/menu/[id]/components/Report";
import Price from "@/app/menu/[id]/components/Price";
import styles from "./page.module.scss";

export default function MenuDetail() {
    return (
        <>
            <Header />
            <div className={styles.content}>
                <Summary />
                <Detail />
                <Price />
                <Report />
            </div>
        </>
    );
}
