"use client";

import { useRouter } from "next/navigation";
import { CgChevronLeft } from "react-icons/cg";
import { LuExternalLink } from "react-icons/lu";
import styles from "./Header.module.scss";

interface Props {
    title?: string;
}
const Header = ({ title }: Props) => {
    const router = useRouter();

    return (
        <header className={styles.wrapper}>
            <button
                type="button"
                className={styles.btn}
                onClick={() => router.back()}
            >
                <CgChevronLeft />
            </button>
            <p className={styles.title}>{title}</p>
        </header>
    );
};

export default Header;
