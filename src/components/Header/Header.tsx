"use client";

import { useRouter } from "next/navigation";
import { CgChevronLeft } from "react-icons/cg";
import styles from "./Header.module.scss";

interface Props {
    title?: string;
}
const Header = ({ title }: Props) => {
    const router = useRouter();

    const handleBack = () => {
        if (document.referrer?.includes(window.location.origin)) {
            router.back();
        } else {
            router.push("/");
        }
    };

    return (
        <header className={styles.wrapper}>
            <button type="button" className={styles.btn} onClick={handleBack}>
                <CgChevronLeft />
            </button>
            <p className={styles.title}>{title}</p>
        </header>
    );
};

export default Header;
